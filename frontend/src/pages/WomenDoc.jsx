import React from 'react'
import Next from '../assets/images/next.png'
import '../Women.css'
import { BASE_URL } from './../config';
import useFetchData from './../hooks/useFetchData';
import Loader from './../components/Loader/Loading';
import Error from './../components/Error/Error';
import { Link } from 'react-router-dom';
import starIcon from '../assets/images/Star.png';
// const WomenDoc = () => {
//   return (
//     <div> <section class="text-gray-700 body-font border-t border-gray-200">
//     <div class="container px-5 py-24 mx-auto">
//       <div
//         class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
//       >
//         <h1
//           class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
//         >
//           Pitchfork Kickstarter Taxidermy
//         </h1>
//         <p class="lg:w-1/2 w-full leading-relaxed text-base">
//           Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
//           gentrify, subway tile poke farm-to-table.
//         </p>
//       </div>
//       <div class="flex flex-wrap ml-10">
//         <div class="xl:w-1/3 md:w-1/2 p-4">
//           <div class="cont border border-gray-300 p-6 rounded-lg">
//             <div
//               class="contnt w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
//             >
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 class="w-6 h-6"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
//               </svg>
//             </div>
//             {/* <!-- <div class="cont">
//               <div class="contnt"> -->
//             <!-- Your content here -->
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             <!-- </div> --> */}
//             <div class="text-overlay"></div>
//             <div class="line-under"></div>
//             <a href="#" class="link-after"
//               ><img class="arrow animate-bounce" src="next.png" alt=""
//             /></a>

//             {/* <!-- </div> -->
//             <!-- <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
//               Shooting Stars
//             </h2>
//             <p class="leading-relaxed text-base">
//               Fingerstache flexitarian street art 8-bit waist co, subway tile
//               poke farm.
//             </p> --> */}
//           </div>
//         </div>
//         <div class="xl:w-1/3 md:w-1/2 p-4">
//           <div class="cont border border-gray-300 p-6 rounded-lg">
//             <div
//               class="contnt w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
//             >
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 class="w-6 h-6"
//                 viewBox="0 0 24 24"
//               >
//                 <circle cx="6" cy="6" r="3"></circle>
//                 <circle cx="6" cy="18" r="3"></circle>
//                 <path
//                   d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
//                 ></path>
//               </svg>
//             </div>
//             <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
//               The Catalyzer
//             </h2>
//             <p class="leading-relaxed text-base">
//               Fingerstache flexitarian street art 8-bit waist co, subway tile
//               poke farm.
//             </p>
//             <div class="text-overlay"></div>
//             <div class="line-under"></div>
//             <a href="#" class="link-after"
//               ><img class="arrow animate-bounce" src={Next} alt=""
//             /></a>
//           </div>
//         </div>
//         <div class="xl:w-1/3 md:w-1/2 p-4">
//           <div class="cont border border-gray-300 p-6 rounded-lg">
//             <div
//               class="contnt w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
//             >
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 class="w-6 h-6"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
//                 <circle cx="12" cy="7" r="4"></circle>
//               </svg>
//             </div>
//             <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
//               Neptune
//             </h2>

//             <p class="leading-relaxed text-base">
//               Fingerstache flexitarian street art 8-bit waist co, subway tile
//               poke farm.
//             </p>
//             <div class="text-overlay"></div>
//             <div class="line-under"></div>
//             <a href="#" class="link-after"
//               ><img class="arrow animate-bounce" src={Next} alt=""
//             /></a>
//           </div>
//         </div>
//         <div class="xl:w-1/3 md:w-1/2 p-4">
//           <div class="cont border border-gray-300 p-6 rounded-lg">
//             <div
//               class="contnt w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
//             >
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 class="w-6 h-6"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"
//                 ></path>
//               </svg>
//             </div>
//             <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
//               Melanchole
//             </h2>
//             <p class="leading-relaxed text-base">
//               Fingerstache flexitarian street art 8-bit waist co, subway tile
//               poke farm.
//             </p>
//             <div class="text-overlay"></div>
//             <div class="line-under"></div>
//             <a href="#" class="link-after"
//               ><img class="arrow animate-bounce" src={Next} alt=""
//             /></a>
//           </div>
//         </div>
//         <div class="xl:w-1/3 md:w-1/2 p-4">
//           <div class="cont border border-gray-300 p-6 rounded-lg">
//             <div
//               class="contnt w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
//             >
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 class="w-6 h-6"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
//               </svg>
//             </div>
//             <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
//               Bunker
//             </h2>
//             <p class="leading-relaxed text-base">
//               Fingerstache flexitarian street art 8-bit waist co, subway tile
//               poke farm.
//             </p>
//             <div class="text-overlay"></div>
//             <div class="line-under"></div>
//             <a href="#" class="link-after"
//               ><img class="arrow animate-bounce" src={Next} alt=""
//             /></a>
//           </div>
//         </div>
//         <div class="xl:w-1/3 md:w-1/2 p-4">
//           <div class="cont border border-gray-300 p-6 rounded-lg">
//             <div
//               class="contnt w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
//             >
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 class="w-6 h-6"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//               </svg>
//             </div>
//             <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
//               Ramona Falls
//             </h2>
//             <p class="leading-relaxed text-base">
//               Fingerstache flexitarian street art 8-bit waist co, subway tile
//               poke farm.
//             </p>
//             <div class="text-overlay"></div>
//             <div class="line-under"></div>
//             <a href="#" class="link-after"
//               ><img class="arrow animate-bounce" src={Next} alt=""
//             /></a>
//           </div>
//         </div>
//       </div>
//       {/* <!-- <button
//         class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//       >
//         Button
//       </button> --> */}
//     </div>
//   </section></div>
//   )
// }




const WomenDoc = () => {
  // Using a custom hook to fetch data
  const { data: fetchedDoctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  // Check if loading or there's an error
  if (loading) {
    return <Loader />;
  }

  if (error || !fetchedDoctors || !Array.isArray(fetchedDoctors.data)) {
    return <Error />;
  }

  function capitalizeWords(str) {
    const s = str.toLowerCase();
    return s.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  // Assuming data fetching was successful
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {fetchedDoctors.data.map((doctor) => {
        console.log(doctor.specialization);
        return (
          (doctor.specialization === 'gynecologist' && (
            <div className="xl:w-1/3 md:w-1/2 p-4" key={doctor.id}>
              <div className="cont border border-gray-300 p-6 rounded-lg">
                <div className="flex">
                  <figure className="w-10 h-10 rounded-full mb-2 mr-2">
                    <img className="w-full" src={doctor?.photo} alt="" />
                  </figure>
                  <div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                      Dr. {capitalizeWords(doctor?.name)}
                    </h2>
                    <div className="flex items-center gap-[6px]">
                      <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                        <img src={starIcon} alt="" /> {doctor?.avgRating}
                      </span>
                      <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
                        ({doctor?.totalRating})
                      </span>
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed text-base">
                  {doctor.about}
                </p>
                <p className="leading-relaxed text-base">
                  {doctor.location}
                </p>
                <div className="text-overlay"></div>
                <div className="line-under"></div>
                <Link to={`/doctors/${doctor._id}`} className="link-after">
                  <img className="arrow animate-bounce" src={Next} alt="" />
                </Link>
              </div>
            </div>
          )
        )
      )
      })}
       {fetchedDoctors.data.map((doctor) => {
        console.log(doctor.specialization);
        return (
          (doctor.specialization === 'physician' && (
            <div className="xl:w-1/3 md:w-1/2 p-4" key={doctor.id}>
              <div className="cont border border-gray-300 p-6 rounded-lg">
                <div className="flex">
                  <figure className="w-10 h-10 rounded-full mb-2 mr-2">
                    <img className="w-full" src={doctor?.photo} alt="" />
                  </figure>
                  <div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                      Dr. {capitalizeWords(doctor?.name)}
                    </h2>
                    <div className="flex items-center gap-[6px]">
                      <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                        <img src={starIcon} alt="" /> {doctor?.avgRating}
                      </span>
                      <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
                        ({doctor?.totalRating})
                      </span>
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed text-base">
                  {doctor.about}
                </p>
                <p className="leading-relaxed text-base">
                  {doctor.location}
                </p>
                <div className="text-overlay"></div>
                <div className="line-under"></div>
                <Link to={`/doctors/${doctor._id}`} className="link-after">
                  <img className="arrow animate-bounce" src={Next} alt="" />
                </Link>
              </div>
            </div>
          )
        )
      )
      })}

    </div>
  );
  
};

export default WomenDoc;
