import {useState} from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import uploadImageToCloudinary from '../../utils/uploadCloudinary'
import { BASE_URL,token } from '../../config'
import { toast } from 'react-toastify'
import {useEffect} from 'react'
// import {authContext} from '../../context/AuthContext'


const Profile = (doctorData) => {
    // const {dispatch}=useContext(authContext)
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            password:'',
            phone: '',
            bio: '',
            location: '',
            gender: '',
            specialization: '',
            ticketPrice: '',
            qualifications:[],
            experiences:[], 
            timeSlots:[],
            about: '',
            photo: ''
        }
    )

    useEffect(()=>{
        setFormData({
            name:doctorData?.doctorData?.name,
            email: doctorData?.doctorData?.email,
            phone: doctorData?.doctorData?.phone,
            bio: doctorData?.doctorData?.bio,
            location: doctorData?.doctorData?.location,
            gender: doctorData?.doctorData?.gender,
            specialization: doctorData?.doctorData?.specialization,
            ticketPrice: doctorData?.doctorData?.ticketPrice,
            qualifications:doctorData?.doctorData?.qualifications,
            experiences:doctorData?.doctorData?.experiences, 
            timeSlots:doctorData?.doctorData?.timeSlots,
            about: doctorData?.doctorData?.about,
            photo: doctorData?.doctorData?.photo
        })
    },[doctorData])
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFileInputChange= async (e)=>{
        const file=e.target.files[0]
        const data= await uploadImageToCloudinary(file)
        setFormData({...formData,photo:data?.url})
    }


    const updateProfileHandler = async (e) => {
        e.preventDefault()
        try{
            // console.log(doctorData?.doctorData)
            // console.log(formData);
const res= await fetch(`${BASE_URL}/doctors/${doctorData?.doctorData._id}`,{
    method:'PUT',
    headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(formData)
})    

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

const result=await res.json()
if(!res.ok){
    throw Error(result.message)
}   
// dispatch({
//     type:"LOGIN_SUCCESS",
//     payload:{
//       user:result.data,
//       token:result.token,
//       role:result.role,
//       gender:result.gender
// }
// });
localStorage.setItem('gender',formData.gender)
toast.success(result.message)

}
    
        catch(err){
            toast.error(err.message)
        }
    }

    const addItem = (type, item) => {
        setFormData(prevFormData=>({...prevFormData,[type]: [...prevFormData[type], item]}))
    }

    const deleteItem = (type, index) => {
        setFormData(prevFormData=>({...prevFormData,[type]: [...prevFormData[type].filter((_, i)=>i!==index)]}))
    }

    const handleReusableInputChange = (type, e, index) => {

        const {name,value}= e.target
        setFormData(prevFormData=>{
            const updateItems=[...prevFormData[type]]
            updateItems[index][name]=value
            return {...prevFormData,[type]: updateItems}

        }
        )}

    // FOR QUALIFICATIONS
    const addQualification = (e) => {
        e.preventDefault()

        addItem('qualifications', {startingDate:'', endingDate:'', degree:'phd', university:'au pryj'})
    }    

    const handleQualificationChange = (e, index) => {

        handleReusableInputChange('qualifications', e, index)

    }

    const deleteQualification = (e,index) => {
        e.preventDefault()
        deleteItem('qualifications', index)
    }


// FOR EXPERIENCES



    const addExperience = (e) => {
        e.preventDefault()

        addItem('experiences', {startingDate:'', endingDate:'', position:'', hospital:''})
    }

    const handleExperienceChange = (e, index) => {

        handleReusableInputChange('experiences', e, index)

    }

    const deleteExperience = (e,index) => {
        e.preventDefault()
        deleteItem('experiences', index)
    }


// FOR TIME SLOTS

    const addTimeSlot = (e) => {
        e.preventDefault()

        addItem('timeSlots', {day:'',startingTime:'', endingTime:''})
    }

    const handleTimeSlotChange = (e, index) => {

        handleReusableInputChange('timeSlots', e, index)

    }

    const deleteTimeSlot = (e,index) => {
        e.preventDefault()
        deleteItem('timeSlots', index)
    }


  return (
    <div>
        <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>
            Profile Information
        </h2>
        <form>
            <div className='mb-5'>
                <p className='form_label'>Name*</p>
                <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form_input"
                
                />
            </div>
            <div className='mb-5'>
                <p className='form_label'>Email*</p>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form_input"
                    readOnly
                    aria-readonly
                    disabled
                
                />
            </div>
            <div className='mb-5'>
                <p className='form_label'>Phone*</p>
                <input
                    type="number"
                    placeholder="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form_input"
                
                />
            </div>
            <div className='mb-5'>
                <p className='form_label'>Bio*</p>
                <input
                    type="text"
                    placeholder="Bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="form_input"
                
                />
            </div>
            <div className='mb-5'>
                <p className='form_label'>Clinic Location*</p>
                <input
                    type="text"
                    placeholder="Clinic Location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="form_input"
                
                />
            </div>
            <div className='mb-5'>

                <div className='grid grid-cols-3 gap-5 mb-[30px]'>
                    <div>
                        <p className='form_label'>Gender*</p>
                        <select 
                        name="gender" 
                        value={formData.gender} 
                        onChange={handleInputChange} 
                        className="form_input py-3.5">
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>


                
                    <div>
                        <p className='form_label'>Specialization*</p>
                        <select 
                        name="specialization" 
                        value={formData.specialization}
                        onChange={handleInputChange} 
                        className="form_input py-3.5">
                            <option value="">Select</option>
                            <option value="surgeon">Surgeon</option>
                            <option value="neurology">Neurology</option>
                            <option value="physician">Physician</option>
                            <option value="pediatrics">Pediatrics</option>
                            <option value="diabetician">Diabetician</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="dentist">Dentist</option>
                            <option value="gynaecology">Gynecology</option>
                        </select>
                    </div>
                    <div>
                        <p className='form_label'>
                            Ticket Price*
                        </p>
                        <input
                            type="number"
                            placeholder="100"
                            name="ticketPrice"
                            value={formData.ticketPrice}
                            onChange={handleInputChange}
                            className="form_input"
                            />
                    </div>


                </div>
            </div>
            <div className='mb-5'>
                <p className='form_label'>Qualifications*</p>
                
                {formData.qualifications?.map((qualification, index) => 
                    <div key={index}>
                       
                        <div>
                            <div className='grid grid-cols-2 gap-5'>
                                <div>
                                    <p className='form_label'>Starting Date*</p>
                                    <input 
                                    type="date" 
                                    name="startingDate" 
                                    value={qualification.startingDate}
                                    className="form_input"
                                    onChange={e=>handleQualificationChange(e,index)}/>
                                </div>

                                <div>
                                    <p className='form_label'>Ending Date*</p>
                                    <input 
                                    type="date" 
                                    name="endingDate" 
                                    value={qualification.endingDate}
                                    className="form_input"
                                    onChange={e=>handleQualificationChange(e,index)}/>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-5 mt-5'>
                                <div>
                                    <p className='form_label'>Degree*</p>
                                    <input 
                                    type="text" 
                                    name="degree" 
                                    value={qualification.degree}
                                    className="form_input"
                                    onChange={e=>handleQualificationChange(e,index)}
                                    />
                                </div>

                                <div>
                                    <p className='form_label'>University*</p>
                                    <input 
                                    type="text" 
                                    name="university" 
                                    value={qualification.university}
                                    className="form_input"
                                    onChange={e=>handleQualificationChange(e,index)}
                                    />
                                </div>
                            </div>

                            <button onClick={e=>deleteQualification(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'>
                                <AiOutlineDelete />
                                </button>
                        </div>
                        
                    </div>
                )}
                <button onClick={addQualification} className='bg-[#000] py-2 px-5 rounded cursor-pointer text-white h-fit'>
                    Add Qualification
                </button>
                
            </div>
            <div className='mb-5'>
                <p className='form_label'>Experiences*</p>
                
                {formData.experiences?.map((experience, index) => 
                    <div key={index}>
                       
                        <div>
                            <div className='grid grid-cols-2 gap-5'>
                                <div>
                                    <p className='form_label'>Starting Date*</p>
                                    <input 
                                    type="date" 
                                    name="startingDate" 
                                    value={experience.startingDate}
                                    className="form_input"
                                    onChange={e=>handleExperienceChange(e,index)}/>
                                </div>

                                <div>
                                    <p className='form_label'>Ending Date*</p>
                                    <input 
                                    type="date" 
                                    name="endingDate" 
                                    value={experience.endingDate}
                                    className="form_input"
                                    onChange={e=>handleExperienceChange(e,index)}/>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-5 mt-5'>
                                <div>
                                    <p className='form_label'>Position*</p>
                                    <input 
                                    type="text" 
                                    name="position" 
                                    value={experience.position}
                                    className="form_input"
                                    onChange={e=>handleExperienceChange(e,index)}
                                    />
                                </div>

                                <div>
                                    <p className='form_label'>Hospital*</p>
                                    <input 
                                    type="text" 
                                    name="hospital" 
                                    value={experience.hospital}
                                    className="form_input"
                                    onChange={e=>handleExperienceChange(e,index)}
                                    />
                                </div>
                            </div>

                            <button onClick={e=>deleteExperience(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'>
                                <AiOutlineDelete />
                                </button>
                        </div>
                        
                    </div>
                )}
                <button onClick={addExperience} className='bg-[#000] py-2 px-5 rounded cursor-pointer text-white h-fit'>
                    Add Experience
                </button>
                </div>
            <div className='mb-5'>
                <p className='form_label'>Time Slots*</p>
                
                {formData.timeSlots?.map((timeSlot, index) => 
                    <div key={index}>
                       
                        <div>
                            <div className='grid grid-cols-2 md:grid-cols-4 mb-[40px] gap-5'>
                                <div>
                                    <p className='form_label'>Day*</p>
                                    <select 
                                    name="day" 
                                    value={timeSlot.day}
                                    className="form_input py-3.5"
                                    onChange={e=>handleTimeSlotChange(e,index)}
                                    >
                                    <option name="day" value="">Select</option>
                                    <option name="day" value="Monday">Monday</option>
                                    <option name="day" value="Tuesday">Tuesday</option>
                                    <option name="day" value="Wednesday">Wednesday</option>
                                    <option name="day" value="Thursday">Thursday</option>
                                    <option name="day" value="Friday">Friday</option>
                                    <option name="day" value="Saturday">Saturday</option>
                                    <option name="day" value="Sunday">Sunday</option>
                                    </select>
                                </div>
                                <div>
                                    <p className='form_label'>Start Time*</p>
                                    <input 
                                    type="time" 
                                    name="startingTime" 
                                    value={timeSlot.startingTime}
                                    className="form_input"
                                    onChange={e=>handleTimeSlotChange(e,index)}
                                    />
                                </div>
                                <div>
                                    <p className='form_label'>End Time*</p>
                                    <input 
                                    type="time" 
                                    name="endingTime" 
                                    value={timeSlot.endingTime}
                                    className="form_input"
                                    onChange={e=>handleTimeSlotChange(e,index)}/>
                                </div>
                                <div className='flex items-center'>
                                   <button onClick={e=>deleteTimeSlot(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-6 cursor-pointer'>
                                    <AiOutlineDelete />
                                    </button>
                                </div>
                            </div>
                            
                            </div>

                            
                        </div>
                )}
                   
                    
                
                   <button onClick={addTimeSlot} className='bg-[#000] py-2 px-5 rounded cursor-pointer text-white h-fit'>
                    Add Time Slots
                </button>
                
                </div>   
            <div className='mb-5'>
                <p className='form_label'>About*</p>
                <textarea
                    type="text"
                    placeholder="Write about yourself"
                    name="about"
                    value={formData.about}
                    onChange={handleInputChange}
                    className="form_input"
                    rows='5'
                
                    />
            </div>
            <div className='mb-5 flex items-center gap-3'>
            {formData.photo && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid
               border-primaryColor flex items-center justify-center">
                <img src={formData.photo} alt="" className="w-full rounded-full" />
                </figure>}

                 <div className="relative w-[130px] h-[50px]">
                  <input
                  type='file'
                  name='photo'
                  id="customFile"
                  onChange={handleFileInputChange}
                  accept=".jpg, .png"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label htmlFor="customFile" className =" absolute top-0 left-0 w-full h-full 
                   flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
                   bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer 
                   ">
                    Upload Photo
                   </label>
                 </div>
                </div>
            <div className="mt-7">
            <button className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3" onClick={updateProfileHandler} type='submit'>
                Update Profile
            </button>
            </div>
               
        </form>
        
    </div>
  )
}

export default Profile