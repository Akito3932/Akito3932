import { useEffect, useRef, useContext } from "react";
import logo from "../../assets/images/logo.png";
import { BiMenu } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
import { authContext } from "../../context/AuthContext.jsx";
import { BASE_URL2 } from "../../config.js";

import { AiFillAndroid } from "react-icons/ai";
import { MdMedicalServices } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
  {
    path: "/analysis",
    display: "Ai Report Analysis",
  },
  {
    path: "/report",
    display: "RepoAI"
  },
  {
    path: "/women-section",
    display: "Women Special"
  },
  
  
];

const linkSide=[
  {
      id:1,
      title:'Doctors',
      content:(
          <>Doctors <FaUserDoctor size={30}/></>
      ),
      url:"/doctors",
      style:"rounded-tr-md"
  },
  {
      id:2,
      title:'Services',
      content:(
          <>Services <MdMedicalServices size={30}/></>
      ),
      url:"/services"
  },
  {
      id:3,
      title:'Contact',
      content:(
          <>Contact <HiMail size={30}/></>
      ),
      url:"/contact",
  },
  {
      id:4,
      title:'Ai Anlysis',
      content:(
          <>Ai Analysis <AiFillAndroid size={30} /></>
      ),
      url:"/analysis",
     
  },
  {
      id: 5,
      title:'swipe',
      content: (<>Swipe Up<FaArrowUp size={30}/></>),
      scrolling:
          function() {
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
              })
      }

  }

]

const linkBottom=[
  {
      id:1,
      title:'Doctors',
      icon:(<FaUserDoctor size={30}/>),
      url:"/doctors",
      style:"rounded-tr-md"
  },
  {
      id:2,
      title:'Services',
      icon:(
          <MdMedicalServices size={30}/>
      ),
      url:"/services"
  },
  {
      id:3,
      title:'Contact',
      icon:(
           <HiMail size={30}/>
      ),
      url:"/contact",
  },
  {
      id:4,
      title:'Ai Anlysis',
      icon:(
          <AiFillAndroid size={30} />
      ),
      url:"/analysis",
     
  },
  {
      id: 5,
      title:'swipe',
      icon: (<FaArrowUp size={30}/>),
      scrolling:
          function() {
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
              })
      }

  }

]
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const {user,role,token}=useContext(authContext);
  console.log(user)

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* {Logo} */}
          <Link to={`${BASE_URL2}`}>
          <div>
            <img src={logo} alt="" />
          </div>
          </Link>
          {/* {Menu} */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav Right */}
          <div className="flex items-center gap-4">
            {
              
              token && user ? 
              (<div>
                
              <Link to={`${role==='doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                
              <ul className="menu flex items-center gap-[1rem]">
              <li><figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={user?.photo} className="w-full rounded-full" alt="" />
                </figure></li>
                  
                <li><h1>{user?.name}</h1>
                </li>
                </ul>
              </Link>
              
            </div> ):
            
            (<Link to="login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>)
          }
            
         <div className='lg:flex flex-col left-0 top-[35%] fixed text-gray-900'>
      <ul>
              {
                linkSide.map(({ id,content,title,url,scrolling}) => {
                   return <li key={id} id={title} className='flex justify-between items-center w-40 h-14 px-4 bg-cyan-400 dark:bg-gray-500 ml-[-100px] hover:ml-[0.2%] hover:rounded-r-md duration-300'>
                    <a href={url} className='cursor-pointer flex justify-between items-center w-40 text-gray-900 dark:text-white' onClick={scrolling}>
                        {content}
                    </a>
                    </li>

                })
              }
      </ul>
      </div>

      {/* <div className='lg:hidden flex top-[92%] justify-evenly text-center items-center w-[60%] lg:w-60 h-[6%] text-4xl lg:text-2xl fixed bg-cyan-500 dark:bg-gray-500 z-10 rounded-2xl'>
              
              {
                  linkBottom.map(({ id, url, icon}) => {
                      
                      return <a href={url} key={id} className='cursor-pointer duration-300 hover:scale-150 ease-in-out'>{icon}</a>
                  })
              
              }
            </div> */}

                   
            
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
