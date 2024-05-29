import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Review from "../models/ReviewScema.js";
export const updateUser = async (req, res) => {
    const id=req.params.id;


    try{

        const updatedUser= await User.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json({success:true, message:"Successfully updated", data:updatedUser});
    }
    catch(error){
        res.status(500).json({success:false, message:"Failed to update user"});
    }
}

export const deleteUser = async (req, res) => {
    console.log(req.params.id , "deleted");
    const id=req.params.id;


    try{

        await User.findByIdAndDelete(id);
        // console.log(Review.find({user:id}));
        await Review.deleteMany({user:id});
        res.status(200).json({success:true, message:"Successfully deleted"});
    }
    catch(error){
        res.status(500).json({success:false, message:"Failed to delete user"});
    }
}


export const getSingleUser = async (req, res) => {
    const id=req.params.id;


    try{

        const user= await User.findById(id).select("-password");
        res.status(200).json({success:true, message:"User found", data:user});
    }
    catch(error){
        res.status(404).json({success:false, message:"No user found"});
    }
}

export const getAllUser = async (req, res) => {
    const id=req.params.id;


    try{

        const user= await User.find({}).select("-password");
        res.status(200).json({success:true, message:"Users found", data:user});
    }
    catch(error){
        res.status(404).json({success:false, message:"No user found"});
    }
}

export const getUserProfile= async (req, res) => {

    const userId=req.userId

    try{
        const user = await User.findById(userId).select("-password");

        if(!user){
            res.status(404).json({success:false, message:"User not found"});
        }
        else{
            const {password, ...rest} = user._doc;
            res.status(200).json({success:true, message:"Profile loading....", data:{...rest}});
        }
    }
    catch(error){
        res.status(500).json({success:false, message:"Failed to load profile"});
    }

    }


export const getMyAppointments= async (req, res) => {

    try{
// retrieve all appointments of the user
// extract the doctor ids from the appointments
//retrieve all doctors with those ids
//send the doctors data to the frontend
        const bookings = await Booking.find({user:req.userId});
        const doctorIds = bookings.map(el=>el.doctor.id);
        const doctors = await Doctor.find({_id:{$in:doctorIds}}).select("-password");
        console.log(doctors);
        res.status(200).json({success:true, message:"Appointments loading....", data:doctors});
    }
    catch(error){
        res.status(500).json({success:false, message:"Failed to load appointments"});
    }

    }