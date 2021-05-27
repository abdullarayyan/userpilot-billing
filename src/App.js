import React, {useEffect, useState} from 'react';
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import SignupForm from "./components/organiztion_info/form_information";
import axios from "axios";
import Footer from "./components/footer/footer";

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    const openSidebar = () => {
        setSidebarOpen(true)
    }
    const closeSidebar = () => {
        setSidebarOpen(false)
    }
    
    const [api, setApi] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const getData = async () => {
        setLoading(true);
        const response = await axios.get(
            "https://mocki.io/v1/cffdf9e2-36af-42b7-ae34-6bc7f197169f"
        );
        setApi(response.data);
        setLoading(false);
    };
    useEffect(() => {
        getData();
    }, []);
    if (isLoading) {
        return "Loading...";
    }
    
    return (
        <main>
        <div className="container">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
            <SignupForm data={api}/>
        
            <Sidebar siebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
            <Footer data={api}/>

        </div>
        </main>
    );
}

export default App;

//   {data.organization.plan_details.applications.map(val => (
//                                                         <li key={val}></li>
//                                                     ))}

// {data.organization.plan_details.applications.map(val => (
//     <div className={} key={val}>
//
//     </div>
// ))}

// {data.organization.plan_details.applications.map(val => (
//     <div key={val}>
//
//         <div className={"table"}>
//             <table id="customers">
//                 <tr>
//                     <th></th>
//                     <th></th>
//                 </tr>
//                 <tr>
//                     <td>Monthly Active Users Allowed
//                     </td>
//                     <td>2500</td>
//                 </tr>
//                 <tr>
//                     <td>Monthly Cost</td>
//                     <td>dd</td>
//                 </tr>
//             </table>
//         </div>
//     </div>
// ))}