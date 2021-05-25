import "./Sidebar.css"
import logo from "../../assets/download.png"


const Sidebar = ({siebarOpen, closeSidebar}) => {
    return (
        <div className={siebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                </div>
                <i
                    className="fa fa-times"
                    id="sidebarIcon"
                    onClick={() => closeSidebar()}
                >
                
                </i>
            </div>
            
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home">
                    
                    </i>
                    <a href="#">PEOPLE</a>
                </div>
                {/*<h1></h1>*/}
                <div className="sidebar__link">
                    <i className="fa fa user-secret">
                    
                    </i>
                    <a href="#">GROWTH INSIGHTS</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa user-secret">
                    
                    </i>
                    <a href="#">ENGAGEMENT LAYER</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa user-secret">
                    
                    </i>
                    <a href="#">NPS</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar