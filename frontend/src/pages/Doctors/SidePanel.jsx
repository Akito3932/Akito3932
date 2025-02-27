
import convertTime from "../../utils/convertTime";
import {BASE_URL,token} from './../../config'
import { toast } from "react-toastify";
const SidePanel = ({doctorId,ticketPrice,timeSlots}) => {

    // const bookingHandler= async()=>{
    //     try{
    //         const res=await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`,{
    //             method:'post',
    //             headers:{
    //                 Authorization:`Bearer ${token}`
    //             },
    //             body:JSON.stringify({doctorId})
                
    //         })
    //         const data=await res.json()
    //         if(!res.ok){
    //             throw new Error(data.message + 'Please try again')
    //         }
    //         if(data.session.ul){
    //             window.location.href=data.session.ul
    //         }
    //     }
    //     catch(err){
    //         console.log(err)
    //        toast.error(err.message)
    //     }
    // }
    if (!ticketPrice){
        ticketPrice=100
    }
    const bookingHandler = async () => {
        try {
            const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
                method: 'post',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await res.json();
            console.log(data);
            if (!res.ok) {
                console.log("EEEE");
                throw new Error(data.message + " Please try again");
            }
            
            if (data.session && data.session.url) {
                window.location.href = data.session.url;
            }
        } catch (err) {
            console.error("Error booking appointment:", err);
            toast.error(err.message);
        }
    }


    return (
        <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
            <div className="flex items-center justify-between">
                <p className="text_para mt-0 font-semibold">Ticket Price</p>
                <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
                   {ticketPrice} INR
                </span>
            </div>

            <div className="mt-[30px]">
                <p className="text_para mt-0 font-semibold  text-headingColor">
                    Available Time Slots:
                </p>
            <ul className='mt-3'>
                {
                timeSlots?.map((item,index)=>(<li key={index} className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                       {item.day}
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                       {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
                    </p>

                </li>)
                )
                }

               

            </ul>
            </div>

            <button onClick={bookingHandler} className='btn px-2 w-full rounded-md'>
                Book Appointment
            </button>
        </div>
    );
};

export default SidePanel;
