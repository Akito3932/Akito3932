import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
// import DoctorDetails from "../../frontend/src/pages/Doctors/DoctorDetails.jsx";



export const updateDoctor = async (req, res) => {
    const id=req.params.id;
        console.log(req.params);


    try{

        const updatedDoctor= await Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json({success:true, message:"Successfully updated", data:updatedDoctor});
    }
    catch(error){
        res.status(500).json({success:false, message:"Failed to update doctor"});
    }
}

export const deleteDoctor = async (req, res) => {
    const id=req.params.id;
    console.log(id);

    try{

        await Doctor.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Successfully deleted"});
    }
    catch(error){
        res.status(500).json({success:false, message:"Failed to delete doctor"});
    }
}


export const getSingleDoctor = async (req, res) => {
    const id=req.params.id;


    try{

        const doctor= await Doctor.findById(id).populate('reviews').select("-password");
        const docData= await Doctor.findById(id).select("-password");
        console.log(docData);
        res.status(200).json({success:true, message:"Doctor found", data:doctor,docData:docData});
    }
    catch(error){
        res.status(404).json({success:false, message:"No doctor found"});
    }
}

export const getAllDoctor = async (req, res) => {
    


    try{
        const {query}=req.query;

        let doctors;
        if(query){
            doctors= await Doctor.find(
                {isApproved:'approved',
                $or:[
                    {
                        name:{$regex:query, $options: "i"}
                    },
                    {
                        specialization:{$regex:query, $options: "i"}
                    },
                    {
                        location:{$regex:query, $options: "i"}
                    }
                ],
            }).select("-password");
        }
        else{
            doctors= await Doctor.find({isApproved:'approved'}).select("-password");
            console.log(doctors)
        }
        
        res.status(200).json({success:true, message:"Doctors found", data:doctors});
    }
    catch(error){
        res.status(404).json({success:false, message:"No doctor found"});
    }
}

export const getDoctorProfile= async (req, res) => {
    
       const doctorId=req.userId

    try{
        const doctor = await Doctor.findById(doctorId).select("-password");

        if(!doctor){
            res.status(404).json({success:false, message:"Doctor not found"});
        }
        const {password, ...rest} = doctor._doc;
        const appointments= await Booking.find({doctor:doctorId});
        res.status(200).json({success:true, message:"Profile loading....", data:{...rest, appointments}});
    }
    catch(error){
        res.status(500).json({success:false, message:"Failed to load profile"});
    }

    }