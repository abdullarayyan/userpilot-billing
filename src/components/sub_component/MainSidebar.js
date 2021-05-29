import React from 'react'
import './MainSidebar.css'
import '../sidebar/Sidebar.css'
import {RiMenuUnfoldLine} from "react-icons/ri";
import {HiOutlineUsers} from "react-icons/hi";
import {FaSignal} from "react-icons/fa";
import {FiLayers, FiSettings} from "react-icons/fi";
import {IoCompassOutline} from "react-icons/io5";

const MainSidebar = (Props) => {
    return (
            <div className="sidebar-container" id={"sidebar"}>
                
                <div className="sidebar">
                    <a href="#" onClick={Props.onToggle}><RiMenuUnfoldLine/></a>
                    <a href="#"><HiOutlineUsers/> </a>
                    <a href="#"><FaSignal/></a>
                    <a href="#"><FiLayers/></a>
                    <a href="#"><IoCompassOutline/></a>
                </div>
                
                <div className="setting">
                    <a href="#"><FiSettings/></a>
                </div>
                
                <div className="name">
                    <div className="nameIcon">
                        JR
                    </div>
                
                </div>
            
            
            </div>
        
    )
}

export default MainSidebar
