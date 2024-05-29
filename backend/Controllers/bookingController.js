import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import Booking from '../models/BookingSchema.js';
import Stripe from 'stripe'

export const getCheckoutSession= async(req,res)=>{
    try{


        const doctor=await Doctor.findById(req.params.doctorId)
        const user=await User.findById(req.userId)
        console.log(req.userId);

        const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)
        console.log("PAYMENT----------------------")
        if(doctor.ticketPrice==='undefined'){
            doctor.ticketPrice=100
        }
        console.log(doctor.ticketPrice);
        //create checkout session
        // const paymentIntent = await stripe.paymentIntents.create({
        //     amount: 1099,
        //     currency: 'usd',
        //     description: 'Software development services',
        //   });
        // const customer = await stripe.customers.create({
        //     name: user.name,
        //     address: {
        //       line1: '510 Townsend St',
        //       postal_code: '98140',
        //       city: 'San Francisco',
        //       state: 'CA',
        //       country: 'US',
        //     },
        //   });
        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:'payment',
            success_url:`${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url:`${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
                      
            client_reference_id:req.params.doctorId,
            line_items:[
                {
                    price_data:{
                        currency:'inr',
                        unit_amount:doctor.ticketPrice*100,
                        product_data:{
                            name:doctor.name,
                            description:doctor.bio,
                            images:[doctor.photo]
                        }
                    },
                    quantity:1
                }
            ],
            // customer: {
            //     name: user.name, // Pass customer's name
            //     email: user.email, // Pass customer's email
            //     // address: {       // Pass customer's address
            //     //     line1: 'Address Line 1',
            //     //     line2: 'Address Line 2',
            //     //     city: 'City',
            //     //     postal_code: 'Postal Code',
            //     //     state: 'State',
            //     //     country: 'Country'
            //     // }
            // }
        })
        console.log(user);
        const defaultOptions={day:'numeric', month:'long', year:'numeric'};
        const booking =new Booking({
            doctor:doctor?._id,
            user:user?._id,
            ticketPrice:doctor.ticketPrice,
            session:session.id,
            appointmentDate: new Date().toLocaleDateString("en-US", defaultOptions)
            
            
            
        })
        // console.log('heyyyy')
        await booking.save()
        // doctor.appointments.push(req.userId)
        // await doctor.save()
        // console.log(doctor.appointments,doctor.name,doctor.ticketPrice,doctor.bio)
        res.status(200).json({success:true,message:'Successfully paid',session})

    }
    catch(err){
        console.log(err)
        res.status(500).json({success:false,message:'Error creating checkout session'})

    }
}



