import "./Navbar.css";
import avatar from "../../assets/download.png";

const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="title_page">
                <h1>settings</h1>
            </div>
            {/*<div className="nav_icon" onClick={() => openSidebar()}>*/}
            {/*</div>*/}
            <div className="navbar__left">
                <a href="#">General</a>
                <a href="#">User</a>
                <a href="#">Team</a>
                <a href="#">Localization</a>
                <a href="#">Exclude List</a>
                <a className="active_link" href="#">Usage & Billing</a>
                {/*<a href="#"><img width="100" src={avatar} alt="avatar"/>*/}
                {/*</a>*/}
            </div>

        </nav>
    )
}

export default Navbar