// import React from "react";
// import { doctors } from "../../assets/data/doctors"; // Assuming this is for initial data load
// import DoctorCard from "./DoctorCard";
// import { BASE_URL } from './../../config';
// import useFetchData from './../../hooks/useFetchData';
// import Loader from '../../components/Loader/Loading';
// import Error from '../../components/Error/Error';

// const DoctorList = () => {
//   // Using a custom hook to fetch data
//   const { data: fetchedDoctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);
//   console.log(fetchedDoctors.data[0]._id)
//   // Check if loading or there's an error
//   if (loading) {
//     return <Loader />;
//   }

//   if (error || !fetchedDoctors || !Array.isArray(fetchedDoctors)) {
//     return <Error />;
//   }

//   // Assuming data fetching was successful
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
//       {fetchedDoctors?.data.forEach((doctor) => (
//         <DoctorCard key={doctor._id} doctor={doctor} />
//         console.log(doctor_id,doctor)
//       ))}
//     </div>
//   );
// };

// export default DoctorList;

// import React from "react";
// import { doctors } from "../../assets/data/doctors"; // Assuming this is for initial data load
// import DoctorCard from "./DoctorCard";
// import { BASE_URL } from './../../config';
// import useFetchData from './../../hooks/useFetchData';
// import Loader from '../../components/Loader/Loading';
// import Error from '../../components/Error/Error';

// const DoctorList = () => {
//   // Using a custom hook to fetch data
//   const { data: fetchedDoctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

//   // Check if loading or there's an error
//   if (loading) {
//     return <Loader />;
//   }

//   if (error || !fetchedDoctors || !Array.isArray(fetchedDoctors.data)) {
//     return <Error />;
//   }

//   // Assuming data fetching was successful
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
//       {fetchedDoctors.data.map((doctor) => (
//         <DoctorCard key={doctor._id} doctor={doctor} />
//       ))}
//     </div>
//   );
// };

// export default DoctorList;
// import React from "react";
// import { doctors } from "../../assets/data/doctors"; // Assuming this is for initial data load
// import DoctorCard from "./DoctorCard";
// import { BASE_URL } from './../../config';
// import useFetchData from './../../hooks/useFetchData';
// import Loader from '../../components/Loader/Loading';
// import Error from '../../components/Error/Error';

// const DoctorList = () => {
//   // Using a custom hook to fetch data
//   const { data: fetchedDoctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);
//   console.log(fetchedDoctors.data[0]._id)
//   // Check if loading or there's an error
//   if (loading) {
//     return <Loader />;
//   }

//   if (error || !fetchedDoctors || !Array.isArray(fetchedDoctors)) {
//     return <Error />;
//   }

//   // Assuming data fetching was successful
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
//       {fetchedDoctors?.data.forEach((doctor) => (
//         <DoctorCard key={doctor._id} doctor={doctor} />
//         console.log(doctor_id,doctor)
//       ))}
//     </div>
//   );
// };

// export default DoctorList;
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { doctors } from "../../assets/data/doctors"; // Assuming this is for initial data load
import DoctorCard from "./DoctorCard";
import { BASE_URL } from "./../../config";
import useFetchData from "./../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const DoctorList = () => {
  // Using a custom hook to fetch data
  const {
    data: fetchedDoctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors`);

  // Check if loading or there's an error
  if (loading) {
    return <Loader />;
  }

  if (error || !fetchedDoctors || !Array.isArray(fetchedDoctors.data)) {
    return <Error />;
  }

  // Assuming data fetching was successful
  return (
    <div className="mt-[30px] lg:mt-[55px] ">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {fetchedDoctors.data.map((doctor) => (
          <SwiperSlide>
            <div className="bg-white py-[30px] px-5 rounded-3" key={doctor._id}>
              <DoctorCard key={doctor._id} doctor={doctor} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoctorList;