import React, {useEffect, useState} from 'react';
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/Main/Main";
import axios from "axios";
import Footer from "./components/footer/Footer";

const App = () => {
    
    const [api, setApi] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const getData = async () => {
        setLoading(true);
        const response = await axios.get(
            "https://mocki.io/v1/1605cf55-9006-497f-b425-7382560f0ed0"//trial
            // "https://mocki.io/v1/7e5a2ff4-a748-4a79-8bd9-b82bce97079c"//standard
            // "https://mocki.io/v1/bf41d095-fc50-49d7-8f37-c31720326fc8"//enterprise
        );
        setApi(response.data);
        setLoading(false);
    };
    useEffect(() => {
        getData();
    }, []);
    if (isLoading) {
        return "IsLoading....";
    }
    
    return (
        <main>
            <div className="container">
                <Navbar/>
                <Main data={api}/>
                <Sidebar/>
                <Footer data={api}/>
            </div>
        </main>
    );
}

export default App;