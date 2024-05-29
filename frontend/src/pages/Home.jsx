// import React from "react";
// import heroImg01 from "../assets/images/hero-img01.png";
// import heroImg02 from "../assets/images/hero-img02.png";
// import heroImg03 from "../assets/images/hero-img03.png";
// import featureImg from "../assets/images/feature-img.png";
// import faqImg from "../assets/images/faq-img.png";
// import videoIcon from "../assets/images/video-icon.png";
// import icon01 from "../assets/images/icon01.png";
// import icon02 from "../assets/images/icon02.png";
// import icon03 from "../assets/images/icon03.png";
// import avatarIcon from "../assets/images/avatar-icon.png";
// import { Link } from "react-router-dom";
// import { BsArrowRight } from "react-icons/bs";
// import About from "../components/About/About";
// import DoctorList from "../components/Doctors/DoctorList";
// import ServiceList from "../components/Services/serviceList";
// import FaqList from "../components/Faq/FaqList";
// import Testimonial from "../components/Testimonial/Testimonial";
// import ScrollRevealAnimation from "../components/Animation/ScrollRevealAnimation";
// const Home = () => {
//   const imgAnimationConfigBigHero = {
//     duration: 1500,
//     origin: "left",
//     distance: "80px",
//     delay: 400,
//     easing: "ease-out",
//   };

//   const imgAnimationConfigTopHero = {
//     duration: 1500,
//     origin: "top",
//     distance: "80px",
//     delay: 600,
//     easing: "ease-out",
//   };

//   const imgAnimationConfigBottomHero = {
//     duration: 1500,
//     origin: "bottom",
//     distance: "80px",
//     delay: 600,
//     easing: "ease-out",
//   };
//   return (
//     <>
//       {/* Hero */}

//       <section className="hero__section pt-[60px] 2xl:h-[800px]">
//         <div className="container">
//           <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
//             {/* hero content */}
//             <div>
//               <div className="lg:w-[570px]">
//                 <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
//                   We help humans, to live a healthy longer life.
//                 </h1>
//                 <p className="text__para">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Molestiae veniam inventore tenetur laboriosam officiis culpa
//                   doloribus quae aut iure deserunt beatae sed, unde debitis
//                   cumque reprehenderit. Beatae aliquam dolorem nisi reiciendis
//                   est,incidunt reprehenderit repudiandae! Incidunt.
//                 </p>
//                 <button className="btn hover:text-textColor hover:bg-cyan-300 ">
//                   Request an Appointment
//                 </button>
//               </div>
//               {/* HeroCounter */}
//               <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
//                 <div>
//                   <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
//                     30+
//                   </h2>
//                   <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
//                   <p className="text__para">Years of Experience</p>
//                 </div>

//                 <div>
//                   <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
//                     15+
//                   </h2>
//                   <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
//                   <p className="text__para">Clinic Location</p>
//                 </div>

//                 <div>
//                   <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
//                     100%
//                   </h2>
//                   <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
//                   <p className="text__para">Customer Satisfaction</p>
//                 </div>
//               </div>
//             </div>
//             {/* hero Content 2 */}
//             <div className="flex gap-[30px] justify-end">
//               <ScrollRevealAnimation
//                 targetClass="hero01"
//                 animationConfig={imgAnimationConfigBigHero}
//               >
//                 <div>
//                   <img className="hero01 w-full" src={heroImg01} alt="" />
//                 </div>
//               </ScrollRevealAnimation>
//               <div className="mt-[30px]">
//                 <ScrollRevealAnimation
//                   targetClass="hero02"
//                   animationConfig={imgAnimationConfigTopHero}
//                 >
//                   <div>
//                     <img
//                       className="hero02 w-full mb-[30px]"
//                       src={heroImg02}
//                       alt=""
//                     />
//                   </div>
//                 </ScrollRevealAnimation>
//                 <ScrollRevealAnimation
//                   targetClass="hero03"
//                   animationConfig={imgAnimationConfigBottomHero}
//                 >
//                   <div>
//                     <img className="hero03 w-full" src={heroImg03} alt="" />
//                   </div>
//                 </ScrollRevealAnimation>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Hero End*/}

//       <section>
//         <div className="container">
//           <div className="lg:w-[470px] mx-auto">
//             <h2 className="heading text-center">
//               Providing the Best medical Services
//             </h2>
//             <p className="text__para text-center">
//               World-Class care for everyone, Our System offers unmatched,expert
//               health care.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
//             <div className="py-[30px] px-5 ">
//               <div className="flex items-center justify-center">
//                 <img src={icon01} alt="" />
//               </div>

//               <div className="mt-[30px]">
//                 <h2 className="leading-9 text-[26px] text-headingColor font-[700] text-center">
//                   Find a Doctor
//                 </h2>
//                 <p className="leading-7 text-[16px] text-textColor font-[400] text-center mt-4">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Labore incidunt necessitatibus illum culpa quia eaque enim
//                   voluptatibus quos nisi architecto?
//                 </p>
//                 <Link
//                   to="/doctors"
//                   className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
//                 >
//                   <BsArrowRight className="group-hover:text-white w-6 h-5" />
//                 </Link>
//               </div>
//             </div>

//             <div className="py-[30px] px-5 ">
//               <div className="flex items-center justify-center">
//                 <img src={icon02} alt="" />
//               </div>

//               <div className="mt-[30px]">
//                 <h2 className="leading-9 text-[26px] text-headingColor font-[700] text-center">
//                   Find a Location
//                 </h2>
//                 <p className="leading-7 text-[16px] text-textColor font-[400] text-center mt-4">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Labore incidunt necessitatibus ilum culpa quia eaque enim
//                   voluptatibus quos nisi architecto?
//                 </p>
//                 <Link
//                   to="/doctors"
//                   className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
//                 >
//                   <BsArrowRight className="group-hover:text-white w-6 h-5" />
//                 </Link>
//               </div>
//             </div>

//             <div className="py-[30px] px-5 ">
//               <div className="flex items-center justify-center">
//                 <img src={icon03} alt="" />
//               </div>

//               <div className="mt-[30px]">
//                 <h2 className="leading-9 text-[26px] text-headingColor font-[700] text-center">
//                   Book Appointment
//                 </h2>
//                 <p className="leading-7 text-[16px] text-textColor font-[400] text-center mt-4">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Labore incidunt necessitatibus illum culpa quia eaque enim
//                   voluptatibus quos nisi architecto?
//                 </p>
//                 <Link
//                   to="/doctors"
//                   className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
//                 >
//                   <BsArrowRight className="group-hover:text-white w-6 h-5" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Start */}
//       <About />
//       {/* About End */}

//       {/* Services Start  */}
//       <section>
//         <div className="container">
//           <div className="xl:w-[470px] mx-auto">
//             <h2 className="heading text-center">Our Medical Services</h2>
//             <p className="text__para text-center">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
//               eaque.
//             </p>
//           </div>

//           <ServiceList />
//         </div>
//       </section>
//       {/* Services End  */}

//       {/* Features Start */}
//       <section>
//         <div className="container">
//           <div className="flex flex-col lg:flex-row items-center justify-between">
//             {/* Feature Content */}
//             <div className="xl:w-[670px]">
//               <h2 className="heading">
//                 Get Virtual treatment <br /> Anytime
//               </h2>
//               <ul className="pl-4">
//                 <li className="text__para">
//                   1. Schedule the Appointment Directly.
//                 </li>
//                 <li className="text__para">
//                   2. Search for your Physician here, and contact their Office.
//                 </li>
//                 <li className="text__para">
//                   3. Use our physician who are accepting new patients , use the
//                   online scheduling tool to select an appointment time
//                 </li>
//               </ul>
//               <Link to="/">
//                 <button className="btn">Learn More</button>
//               </Link>
//             </div>
//             {/* feature Img */}
//             <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg-mt0">
//               <img src={featureImg} className="w-3/4" alt="" />
//               <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-[6px] lg:gap-3">
//                     <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
//                       Tue,24
//                     </p>
//                     <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
//                       10:00 AM
//                     </p>
//                   </div>
//                   <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
//                     <img src={videoIcon} alt="" />
//                   </span>
//                 </div>

//                 <div className="w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
//                   Consultation
//                 </div>
//                 <div className="flex items-center gap-[6px] mt-2 lg:gap-[10px] lg:mt-[18px] ">
//                   <img src={avatarIcon} alt="" />
//                   <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
//                     Harshit Pathak
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Features End */}

//       {/* Our Doctors */}
//       <section>
//         <div className="container">
//           <div className="xl:w-[470px] mx-auto">
//             <h2 className="heading text-center">Our Doctors</h2>
//             <p className="text__para text-center">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
//               eaque.
//             </p>
//           </div>
//           <DoctorList />
//         </div>
//       </section>
//       {/* Our Doctors End */}

//       {/* Faq Section */}
//       <section>
//         <div className="container">
//           <div className="flex justify-between gap-[50px] lg:gap-0">
//             <div className="w-1/2 hidden md:block">
//               <img src={faqImg} alt="" />
//             </div>
//             <div className="w-full md:w-1/2">
//               <h2 className="heading">
//                 Most asked questions by our beloved patients
//               </h2>
//               <FaqList />
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Faq Section End*/}

//       {/* testimonials */}
//       <section>
//         <div className="container">
//           <div className="xl:w-[470px] mx-auto">
//             <h2 className="heading text-center">What Our patient says</h2>
//             <p className="text__para text-center">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
//               eaque.
//             </p>
//           </div>
//           <Testimonial />
//         </div>
//       </section>
//       {/* testimonials end */}
//     </>
//   );
// };

// export default Home;

import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import period from "../assets/images/period.jpeg"
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import DoctorList from "../components/Doctors/DoctorList";
import ServiceList from "../components/Services/serviceList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import ScrollRevealAnimation from "../components/Animation/ScrollRevealAnimation";
const Home = () => {
  const imgAnimationConfigBigHero = {
    duration: 1500,
    origin: "left",
    distance: "80px",
    delay: 400,
    easing: "ease-out",
  };

  const imgAnimationConfigTopHero = {
    duration: 1500,
    origin: "top",
    distance: "80px",
    delay: 600,
    easing: "ease-out",
  };

  const imgAnimationConfigBottomHero = {
    duration: 1500,
    origin: "bottom",
    distance: "80px",
    delay: 600,
    easing: "ease-out",
  };
  return (
    <>
      {/* Hero */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help humans, to live a healthy longer life.
                </h1>
                <p className="text__para">
                  We offer convenient online appointment booking with a team of
                  qualified physicians dedicated to providing exceptional care.
                  Find the right specialist for your needs and take charge of
                  your well-being today.
                </p>
                <button className="btn hover:text-textColor hover:bg-cyan-300 ">
                  <Link to="/analysis">Get Your Report/Health Analysis</Link>
                </button>
              </div>
              {/* HeroCounter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Customer Satisfaction</p>
                </div>
              </div>
            </div>
            {/* hero Content 2 */}
            <div className="flex gap-[30px] justify-end">
              {/* Effect for particular img */}
              <ScrollRevealAnimation
                targetClass="hero01"
                animationConfig={imgAnimationConfigBigHero}
              >
                <div>
                  <img className="hero01 w-full" src={heroImg01} alt="" />
                </div>
              </ScrollRevealAnimation>
              <div className="mt-[30px]">
                <ScrollRevealAnimation
                  targetClass="hero02"
                  animationConfig={imgAnimationConfigTopHero}
                >
                  <div>
                    <img
                      className="hero02 w-full mb-[30px]"
                      src={heroImg02}
                      alt=""
                    />
                  </div>
                </ScrollRevealAnimation>
                <ScrollRevealAnimation
                  targetClass="hero03"
                  animationConfig={imgAnimationConfigBottomHero}
                >
                  <div>
                    <img className="hero03 w-full" src={heroImg03} alt="" />
                  </div>
                </ScrollRevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero End*/}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the Best medical Services
            </h2>
            <p className="text__para text-center">
              World-Class care for everyone, Our System offers unmatched,expert
              health care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <ScrollRevealAnimation
              targetClass="serviceContainer"
              animationConfig={imgAnimationConfigBottomHero}
            >
              <div className="serviceContainer py-[30px] px-5 ">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="leading-9 text-[26px] text-headingColor font-[700] text-center">
                    Find a Doctor
                  </h2>
                  <p className="leading-7 text-[16px] text-textColor font-[400] text-center mt-4">
                    Based upon your preferences like place , specialist and name
                    find the doctor conveniently
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollRevealAnimation>
            <ScrollRevealAnimation
              targetClass="serviceContainer"
              animationConfig={imgAnimationConfigBottomHero}
            >
              <div className="serviceContainer py-[30px] px-5 ">
                <div className="flex items-center justify-center">
                  <img src={period} alt="" className="h-[150px]"/>
                </div>

                <div className="mt-[30px]">
                  <h2 className="leading-9 text-[26px] text-headingColor font-[700] text-center">
                    Women Health Care
                  </h2>
                  <p className="leading-7 text-[16px] text-textColor font-[400] text-center mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore incidunt necessitatibus ilum culpa quia eaque enim
                    voluptatibus quos nisi architecto?
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollRevealAnimation>
            <ScrollRevealAnimation
              targetClass="serviceContainer"
              animationConfig={imgAnimationConfigBottomHero}
            >
              <div className="serviceContainer py-[30px] px-5 ">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="leading-9 text-[26px] text-headingColor font-[700] text-center">
                    Book Appointment
                  </h2>
                  <p className="leading-7 text-[16px] text-textColor font-[400] text-center mt-4">
                    Easily book your appointment online by selecting your
                    preferred specialist, date, and time. We offer flexible
                    scheduling options to fit your busy life.
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollRevealAnimation>
          </div>
        </div>
      </section>

      {/* About Start */}
      <About />
      {/* About End */}

      {/* Services Start  */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              We offer medical Consultation services in a wide coverage in
              diffrent medical expertise and fields.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* Services End  */}

      {/* Features Start */}
      <section>
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Feature Content */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual treatment <br /> Anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the Appointment Directly.
                </li>
                <li className="text__para">
                  2. Search for your Physician here, and contact their Office.
                </li>
                <li className="text__para">
                  3. Use our physician who are accepting new patients , use the
                  online scheduling tool to select an appointment time
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/* feature Img */}

            <ScrollRevealAnimation
              targetClass="featureSec"
              animationConfig={imgAnimationConfigBigHero}
            >
              <div className="featureSec relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg-mt0">
                <img src={featureImg} className="w-3/4" alt="" />
                <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3">
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                        Tue,24
                      </p>
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
                        10:00 AM
                      </p>
                    </div>
                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                      <img src={videoIcon} alt="" />
                    </span>
                  </div>

                  <div className="w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                    Consultation
                  </div>
                  <div className="flex items-center gap-[6px] mt-2 lg:gap-[10px] lg:mt-[18px] ">
                    <img src={avatarIcon} alt="" />
                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                      Harshit Pathak
                    </h4>
                  </div>
                </div>
              </div>
            </ScrollRevealAnimation>
          </div>
        </div>
      </section>
      {/* Features End */}

      {/* Our Doctors */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Doctors</h2>
            <p className="text__para text-center">
              Our service offers you the best doctors based on thier ratings and
              reviews at your location.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* Our Doctors End */}

      {/* Faq Section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <ScrollRevealAnimation
              targetClass="faqContainer"
              animationConfig={imgAnimationConfigBigHero}
            >
              <div className="faqContainer w-1/2 hidden md:block">
                <img src={faqImg} alt="" />
              </div>
            </ScrollRevealAnimation>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most asked questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* Faq Section End*/}

      {/* testimonials */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What Our patient says</h2>
            <p className="text__para text-center">
              All the ratings are from trusted end-users itself based upon thier
              experience with us.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* testimonials end */}
    </>
  );
};

export default Home;
