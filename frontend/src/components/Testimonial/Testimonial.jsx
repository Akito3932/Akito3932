import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {BASE_URL} from "../../config";
// import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../Loader/Loading";
import Error from "../Error/Error";
const Testimonial = () => {
  const {data, loading, error} = useFetchData(`${BASE_URL}/reviews`);

  if (loading) {
    return <Loader />;
  }

  if (error || !data || !Array.isArray(data.data)) {
    return <Error />;
  }

  
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
        
        
            {
    
              data.data.map((item,ind) => (
                
                <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3" key={ind}>
                  <div className="flex items-center gap-[13px]">
                  <figure className='w-12 h-12 rounded-full'>
              <img className='w-full h-[80%]' src={item?.user?.photo} alt=""/>
            </figure>

                    <div>
                      <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        {item?.user?.name}
                      </h4>
                      <div className="flex item-center gap-[2px]">
                        {
                          item.rating && Array.from({length: item.rating}, (_, i) => (
                            <HiStar className="text-yellowColor w-[18px] h-5" key={i} />
                          ))
                        }
                        
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    {item?.reviewText}
                  </p>
                </div>
             </SwiperSlide>

              ))
  }
              
       
       
       
      </Swiper>
    </div>
  );
};

export default Testimonial;
