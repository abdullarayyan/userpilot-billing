import React, {useEffect, useState} from 'react';
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import SignupForm from "./components/organiztion_info/form_information";
import axios from "axios";
import Footer from "./components/footer/footer";
import Main from "./components/main/Main";
const App = () => {
    
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
                <Navbar/>
                <SignupForm data={api}/>
                {/*                <Main data={api}/>*/}
                <Sidebar/>
                <Footer data={api}/>

            </div>
        </main>
    );
}

export default App;