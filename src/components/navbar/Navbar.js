
import React, {useEffect, useState } from "react";
import {  NavLink} from "react-router-dom";

import MenuItem from './MenuItem';
import '../../assets/css/Navbar.css';
const menuItems = [
  {name:"Anasayfa",to: "/"},
  /*{name:"Hakkımızda",to: "/about_us"},*/
  {name:"Özellikler",to: "/ozellikler"},
  {name: "Demo", to: "/demo"},
  /*{name:"Fiyatlandırma",to: "/prices"},*/
  {name:"Blog",to: "/blog"},
  /*{name:"Blog Detay",to: "/blog_detail"},*/
  {name:"Destek", to: "/help"},
  {name:"İletişim",to: "/contact"},
  /*{name:"Detay",to: "/features_detail"},*/

]


 function Cetvel_Navbar(){
  const[toggleMenu, setToggleMenu] = useState(false);
  const[navbar, setNavbar] = useState(false);
  const [activate, setActive] = useState(false);


  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }
 
  const changeBackground = () => {
  
    if(window.scrollY > 80)
      setNavbar(true);
    else{
      setNavbar(false);
    }
  }

window.addEventListener('scroll', changeBackground);
  return( <div>
    <div className='cetvel_navbar'>
      <div className='navbar_top'>
          <div className='navbar_top_content'>
            <div className='navbar_icons'>
              <span><i className='bx bxl-facebook-circle'></i></span>
              <span><i className='bx bxl-twitter' ></i></span>
              <span><i className='bx bxl-instagram' ></i></span>
            </div>
            <div className='demo_info'>
              <span>WiRadius, ücretsiz deneyin! </span>
              <a href='https://wiradius.com/demo' className='btn_demo'>Demo</a>
            </div>
          </div>
      </div>
      <div className={navbar ? 'navbar_container active' : 'navbar_container'}>
        <div className="navbar_header_left">
          <NavLink to="/"> WiRadius</NavLink>
        </div>
        <div className="menu_mobile">
          <button onClick={toggleNav} className='menuBar'><i className='bx bx-menu-alt-left' ></i></button>
            {toggleMenu &&(
            <div> 
              <div onClick={toggleNav} className='overlay'></div>
              <div className="menu_list_mobile ">
                <div className="menu_mobile_header">
                  <span  onClick={toggleNav}><i className='bx bx-x' ></i></span>
                  <NavLink to="/"> WiRadius</NavLink>
                </div>
                {menuItems.map((menuItem,index)=>(
                  <li className={`animate__animated liAnimasyonu delay_${index}`} onClick={()=> setActive(!activate)}><a href={menuItem.to} className={`sideMenu ${!activate ? "inActive" : ""}`}> {menuItem.name} </a></li>
                  )
                )}
              </div>
              </div>
            )}
        </div>
        <div className='navbar_header_right navbar_desktop'>
          <ul> 
          {menuItems.map((menuItem,index)=>(
                    <MenuItem
                        key = {index}
                        name={menuItem.name}
                        to={menuItem.to}
                        onClick={() =>{
                          if(!activate){
                              setActive(true);
                          }
                      }}
                    />
                ))}
          </ul>         
        </div>
      </div>
    </div>
  </div>);
   
  }

export default Cetvel_Navbar;
