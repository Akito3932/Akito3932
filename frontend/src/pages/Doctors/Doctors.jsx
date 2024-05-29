// import Doctorcard from './../../components/Doctors/DoctorCard';
// import{doctors} from './../../assets/data/doctors';
// import Testimonial from '../../components/Testimonial/Testimonial';
// import { BASE_URL } from './../../config';
// import useFetchData from './../../hooks/useFetchData';
// import Loader from '../../components/Loader/Loading';
// import Error from '../../components/Error/Error';


// const Doctors = () => {

//   const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);


//   return (
//     <>
//        <section className='bg-[#fff9ea]'>
//         <div className="container text-center">
//         <h2 className='heading'>
//          Find a Doctor
//        </h2>
//        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded -md flex items-center
//         justify-between">
     
//         <input 
//          type='search' className="py-4 pl-4 pr-2 bg-transparent w- full
//          focus:outline-none cursor-pointer placeholder:text-textColor" 
//          placeholder="Search Doctor"/>
//          <button className='btn mt-0 rounded-[0px] rounded-r-md'>
//         Search
//         </button>
//        </div>
//       </div>
//        </section>

//          <section>
//         <div className='container'>
//           {loading && <Loader />}
//           {error && <Error/>}
//         {!loading && !error && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
//       {doctors.map((doctor) => (
//         <Doctorcard key={doctor.id} doctor={doctor} />
//       ))}
//     </div>}
//          </div>
//        </section>

//        <section>
//         <div className="container">
//           <div className="xl:w-[470px] mx-auto">
//             <h2 className="heading text-center">What Our patient says</h2>
//             <p className="text__para text-center">
//               world class care for everyone . Our health System offers unmatched, expert health care 
//             </p>
//           </div>
//           <Testimonial/>
//         </div>
//       </section>
//         </>
//   );
// };

// export default Doctors;

// import DoctorCard from './../../components/Doctors/DoctorCard';
// import { BASE_URL } from './../../config';
// import useFetchData from './../../hooks/useFetchData';
// import Loader from '../../components/Loader/Loading';
// import Error from '../../components/Error/Error';


// const Doctors = () => {
//   // Using a custom hook to fetch data
//   const { data: fetchedDoctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);
//   if (loading) {
//     return <Loader />;
//   }

//   if (error || !fetchedDoctors || !Array.isArray(fetchedDoctors.data)) {
//     return <Error />;
//   }
//   return (
//     <>
//       <section className='bg-[#fff9ea]'>
//         <div className="container text-center">
//           <h2 className='heading'>
//             Find a Doctor
//           </h2>
//           <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded -md flex items-center justify-between">
//             <input 
//               type='search' 
//               className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" 
//               placeholder="Search Doctor"/>
//             <button className='btn mt-0 rounded-[0px] rounded-r-md'>
//               Search
//             </button>
//           </div>
//         </div>
//       </section>

//       <section>
//         <div className='container'>
//           {<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//               {fetchedDoctors.map((doctor) => (
//                 <DoctorCard key={doctor.id} doctor={doctor} />
//               ))}
//             </div>
//           }
//         </div>
//       </section>

//       <section>
//         <div className="container">
//           <div className="xl:w-[470px] mx-auto">
//             <h2 className="heading text-center">What Our patient says</h2>
//             <p className="text__para text-center">
//               world class care for everyone. Our health System offers unmatched, expert health care 
//             </p>
//           </div>
//           {/* Assuming Testimonial component is defined elsewhere */}
//           {/* <Testimonial/> */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Doctors;


import Doctorcard from './../../components/Doctors/DoctorCard';
import{doctors} from './../../assets/data/doctors';
import Testimonial from '../../components/Testimonial/Testimonial';
import { BASE_URL } from './../../config';
import useFetchData from './../../hooks/useFetchData';
import Loader from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import {useState,useEffect} from 'react'

const Doctors = () => {
  const [query, setQuery]=useState('')
  const [debounceQuery,setDebounceQuery]=useState('')

  const handleSearch=()=>{
    setQuery(query.trim())
    console.log("handle search")
  }

  useEffect(()=>
  {
    const timeout=setTimeout(()=>
    {
      setDebounceQuery(query)
    },700)
    return ()=> clearTimeout(timeout)
  },[query])

  const {
    data:docData,
    loading,
    error
  }=useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`)
  console.log(`${BASE_URL}/doctors?query=${debounceQuery}`);
  // import React, { useState } from 'react';

  // // ...

  // const [location, setLocation] = useState('');

  // const handleLocationChange = (e) => {
  //   setLocation(e.target.value);
  // };

  // const filteredDoctors = docData.data.filter((doctor) => {
  //   return doctor.location.toLowerCase().includes(location.toLowerCase());
  // });

  // // ...

  // <input 
  //   type='search' 
  //   className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" 
  //   placeholder="Search doctor by location"
  //   value={location}
  //   onChange={handleLocationChange}
  // />

  // // ...

  // {filteredDoctors.map((doctor) => (
  //   <Doctorcard key={doctor.id} doctor={doctor} />
  // ))}

  // // ...

  // const { data: docSubData, loadingSub, errorSub } = useFetchData(`${BASE_URL}/doctors`);
  if (loading) {
    return <Loader />;
  }

  if (error || !docData || !Array.isArray(docData.data)) {
    return <Error />;
  }

  return (
    <>
       <section className='bg-[#fff9ea]'>
        <div className="container text-center">
        <h2 className='heading'>
         Find a Doctor
       </h2>
       <div className="max-w-[600px] mt-[30px] mx-auto bg-[#0066ff2c] rounded -md flex items-center
        justify-between">
     
        <input 
         type='search' className="py-4 pl-4 pr-2 bg-transparent w-full
         focus:outline-none cursor-pointer placeholder:text-textColor" 
         placeholder="Search doctor by name,specification or location"
         value={query}
         onChange={e=>setQuery(e.target.value)}/>
         
         <button className='btn mt-0 rounded-[0px] rounded-r-md' onClick={handleSearch}>
        Search
        </button>
       </div>
      </div>
       </section>

         <section>
        <div className='container'>
          
        {<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {docData.data.map((doctor) => (
        <Doctorcard key={doctor.id} doctor={doctor} />
      ))}
    </div>}
         </div>
       </section>

       <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What Our patient says</h2>
            <p className="text__para text-center">
              world class care for everyone . Our health System offers unmatched, expert health care 
            </p>
          </div>
          <Testimonial/>
        </div>
      </section>
        </>
  );
};

export default Doctors