import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import DoctorCard from './../../components/Doctors/DoctorCard'
import Loading from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'


const MyBookings = () => {

    const {data:appointments,loading,error}=useFetchData(`${BASE_URL}/users/appointments/my-appointments`)
    console.log(appointments,appointments.length,appointments?.data?.length,"appointments")
  return (
    <div>
        {/* {
                loading && error && <Loading/>
            }
            {
                error && !loading && <Error errorMessage={error}/>
            }
            {/* {
                !loading && !error && (<div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        appointments.map(doctor=>(
                            <DoctorCard doctor={doctor} key={doctor._id} />
                        ))
                    }
                    
            </div>
            )}
            {!loading && !error && appointments.length===0 && <h2 className='text-headingColor text-[20px] leading-[30px] font-semibold'>No Appointments Found</h2>}
             */}
            {/* { !loading && !error && (
  <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
    {Array.isArray(appointments) && appointments.length > 0 ? (
      appointments.map(doctor => (
        <DoctorCard doctor={doctor} key={doctor._id} />
      ))
    ) : (
        <h2 className='mt-5 text-center text-[20px] leading-7 font-semibold text-primaryColor'>You did not book any doctors yet! </h2>
    )}
  </div>
)
    } */} 
    {loading && !error && <Loading />}
    {error && !loading && <Error errorMessage={error} />}
    {appointments?.data?.length>0 && (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {appointments?.data?.map(doc => {
          return <DoctorCard doctor={doc} key={doc._id} />
        }
      )
    }
    
      </div>
      
    )}
    {!loading && !error && appointments?.data?.length === 0 && (
      <h2 className='mt-5 text-center text-[20px] leading-7 font-semibold text-primaryColor'>You did not book any doctors yet! </h2>
    )}
    </div>
  )
}

export default MyBookings