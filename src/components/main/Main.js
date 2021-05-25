import "./Main.css"
import hello from "../../assets/download.png"
import { useFormik } from 'formik';

const Main =()=>{
    return(
    <main>
        <div className="main__container">
            <div className="main__title">
                <div className="main__greeting">
                    <h1>Hello Component</h1>
                    <p>.Lormis welcome admin</p>
                    
                </div>
            </div>
            <div className="main__cards">
                <div className="card">
                    <i className=""></i>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Main