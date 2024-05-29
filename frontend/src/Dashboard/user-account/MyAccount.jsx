

import React from 'react'
import { useContext, useState } from 'react'

import userImg from '../../assets/images/doctor-img01.png'

import { authContext } from '../../context/AuthContext'

import MyBookings from './MyBookings'
import Profile from './Profile'
import useGetProfile from '../../hooks/useFetchData'
import { BASE_URL, token } from '../../config'
import { toast } from 'react-toastify'

import Loading from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'

const MyAccount = () => {

    const {dispatch}=useContext(authContext)
    const [tab,setTab]=useState('bookings')
    const {data:userData,loading,error}=useGetProfile(`${BASE_URL}/users/profile/me`) 

    console.log(userData,"user data")
    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})
    };


    const deleteHandler = async (e) => {
        // setLoading(true);
      
        
   
        e.preventDefault()
        try{
            console.log(userData?.data?._id)
const res= await fetch(`${BASE_URL}/users/${userData?.data?._id}`,{
    method:'DELETE',
    headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
    },
    body:JSON.stringify({userData})
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
    
    <section>
        <div className='max-w-[1170px] px-5 mx-auto'>

            {
                loading && !error && <Loading/>
            }
            {
                error && !loading && <Error errorMessage={error}/>
            }
            {
                !loading && !error && userData && userData.data && (
        <div className='grid md:grid-cols-3 gap-10'>

            <div className='pb-[50px] px-[30px] rounded-md'>
                <div className='flex items-center justify-center'>
                    <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
                        <img src={userData.data.photo} alt='' className='w-full h-full rounded-full'/>
                    </figure>
            </div>
            <div className='text-center mt-4'>
                <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>{userData.data.name}</h3>
                <p className='text-textColor text-[15px] leading-6 font-medium'>{userData.data.email}</p>
                <p className='text-textColor text-[15px] leading-6 font-medium'>Blood Type : <span className='ml-2 text-headingColor text-[22px] leading-8'>{userData.data.bloodType}</span> </p>

            </div>
            <div className='mt-[50px] md:mt-[100px]'>
                <button className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white' onClick={handleLogout}>LogOut</button>
                <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white' onClick={deleteHandler}>Delete Account</button>
            </div>
            </div>
            <div className='md:col-span-2 md:px-[30px]'>
                <div>
                    <button onClick={()=> setTab('bookings')} className={`${tab==='bookings' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border-solid border border-primaryColor`}>My Bookings</button>
                    <button onClick={()=> setTab('settings')} className={`${tab==='settings' && 'bg-primaryColor text-white font-normal'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border-solid border border-primaryColor`}>Settings</button>
                </div>
                {
                    tab==='bookings' && <MyBookings/>
                }
                {
                    tab==='settings' && <Profile user={userData.data} />
                }

            </div>
            </div>
                )
            }
    </div>
    </section>
  )
}

export default MyAccount