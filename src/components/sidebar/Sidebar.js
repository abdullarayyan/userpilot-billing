import React from 'react';
import MainSidebar from '../sub_component/MainSidebar';
import SideBarOpen from '../sub_component/SideBarOpen';
import {useState} from 'react'

const Sidebar = () => {
    const [menuIcon, setMenuIcon] = useState(false);
    const onToggle = () => {
        setMenuIcon(!menuIcon);
    }
    const SidebarEffect = () => {
        if (!menuIcon) {
            return <MainSidebar onToggle={onToggle}/>;
        } else {
            return <SideBarOpen onToggle={onToggle}/>;
        }
    }
    return (
        SidebarEffect()
    )
}
export default Sidebar
