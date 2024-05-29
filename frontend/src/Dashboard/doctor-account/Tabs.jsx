import { useContext } from 'react'
import { BiMenu } from 'react-icons/bi'
import { authContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import useGetProfile from '../../hooks/useFetchData'
import { BASE_URL, token } from '../../config'
const Tabs = ({tab,setTab}) => {

    const {dispatch}=useContext(authContext)
    const navigate=useNavigate()
    const {data,loading,error}=useGetProfile(`${BASE_URL}/doctors/profile/me`)
    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})
        navigate('/')
    }
    const handleDelete= async (e)=>{
        e.preventDefault()
        try{
            console.log(data?.data?._id ,"deletion")
            const res= await fetch(`${BASE_URL}/doctors/${data?.data?._id}`,{
                method:'DELETE',
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
                },
                body:JSON.stringify({data:data?.data})
            })    
        
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        
            const result=await res.json()
            if(!res.ok){
                throw Error(result.message)
            }   
            dispatch({type:'LOGOUT'})
            toast.success(result.message)
        
        
                }
            
                catch(err){
                    toast.error(err.message)
                }
    }

  return (
    <div>
        <span className='lg:hidden'>
            <BiMenu className='w-6 h-6 cursor-pointer'/>
        </span>
        <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
           
            <button 
            onClick={()=>setTab('overview')}
            className={
                `${tab==='overview' 
                ? 'bg-indigo-100 text-primaryColor'
                :'bg-transparent text-headingColor'
            }
                 w-full btn mt-0 rounded-md`}>Overview
            </button>
            
            
            <button 
            onClick={()=>setTab('appointments')}
            className={
                `${tab==='appointments' 
                ? 'bg-indigo-100 text-primaryColor'
                :'bg-transparent text-headingColor'
            }
                 w-full btn mt-0 rounded-md`}>Appointments
            </button>
           
           
            <button 
           
            onClick={()=>setTab('settings')}
            className={
                `${tab==='settings' 
                ? 'bg-indigo-100 text-primaryColor'
                :'bg-transparent text-headingColor'
            }
                 w-full btn mt-0 rounded-md`}>Profile
            </button>

            <div className='mt-[50px] w-full'>
                <button className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white' onClick={handleLogout}>LogOut</button>
                <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white' onClick={handleDelete}>Delete Account</button>
            </div>
        </div>
    </div>
  )
}

export default Tabs