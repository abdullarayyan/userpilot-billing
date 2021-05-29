import React from "react";
import './SideBarOpen.css'
import "../sidebar/Sidebar.css"
import icon from "../../assets/userpilotIcon.png";
import { RiMenuFoldLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi";
import { FaSignal } from "react-icons/fa";
import { FiLayers, FiSettings } from "react-icons/fi";
import { IoCompassOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import {useState} from 'react'

const SideBarOpen = (Props) => {

  const [arrowIcon,setArrowIcon] = useState(false);

  const onToggleArrow = () => {
    setArrowIcon(!arrowIcon);
 }


 const MenuElements = () => {
     if (!arrowIcon) {
       return;
     }else {
       return (
        <div className="submenu-people">
        <div className="items-people">
        <a href="#">Users</a>
        <a href="#">Companies</a>
        <a href="#">Segments</a>
        </div>
      </div>
       );
      }
   }


function getarrowStyle() {
  if(arrowIcon) {
   return { borderColor: "white", borderRadius: 5,  backgroundColor: '#16171f'} ;
    
  } 
}

  return (
    <div className="sub-sidebar-container" id={"sidebar"}>
      <div className="sidebar-header">
        <img src={icon} alt="Logo" />
        <a href="#">
          <RiMenuFoldLine  onClick={Props.onToggle}/>
        </a>
      </div>
      <div className="sidebar-menu">
        <div className="menu-item item1 "  onClick={onToggleArrow}>
          <div className="sub-menu-item">
            <div className="group" style={{ color: !arrowIcon? 'darkgray': 'white'}}>
              <div className="icon">< HiOutlineUsers/></div>
              <div className="item-name">PEOPLE</div>
            </div>
            
            <div className="arrowIcon" style={getarrowStyle()}>{!arrowIcon ? <IoIosArrowForward/>: <IoIosArrowUp className="arrow"/> }</div>
          </div>
        </div>
        
    
        {MenuElements()}
        <div className="menu-item item2" >
        <div className="sub-menu-item">
            <div className="group" style={ {color: 'darkgray'}}>
              <div className="icon"><  FaSignal/></div>
              <div className="item-name">GROWTH INSIGHTS</div>
            </div>
            
            <div className="arrowIcon"><IoIosArrowForward/></div>
          </div>
        </div>
        <div className="menu-item item3" >
        <div className="sub-menu-item">
            <div className="group" style={ {color: 'darkgray'}}>
              <div className="icon">< FiLayers/></div>
              <div className="item-name">ENGAGEMENT LAYER</div>
            </div>
            
            <div className="arrowIcon"><IoIosArrowForward/></div>
          </div>
        </div>
        <div className="menu-item item4" >
        <div className="sub-menu-item">
            <div className="group" style={ {color: 'darkgray'}}>
              <div className="icon">< IoCompassOutline/></div>
              <div className="item-name">NPS</div>
            </div>
            
            <div className="arrowIcon"><IoIosArrowForward/></div>
          </div>
        </div>
      </div>
      <div className="sidebar-setting">
       <FiSettings className="settingIcon"/>
       <p>CONFIGURE</p>
      </div>

      <div className="sidebar-username">
        <div className="usernameIcon">JR</div>
        <div className="usernameEmail">
         <p>John Roosevelt<br/>John@gmail.com</p>
         
        </div>
        <div className="emailArrowIcon"><IoIosArrowForward/></div>
       
      </div>

    </div>
  );
}

export default SideBarOpen;