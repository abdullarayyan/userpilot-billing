import "./Main.css"
import SignupForm from "../organiztion_info/form_information";
import AddPayment from "../payment_method/AddPaymentMethode";
import React from "react";
import img from "../../assets/Untitled1111.png";
import "../main/Main.css"
import {useFormik} from 'formik';
import "react-sliding-pane/dist/react-sliding-pane.css";
import Select_option from "../sub_component/select";
import visa from "../../assets/visa.png"
import UpdatePayment from "../payment_method/UpdatePaymentMethode";
import FreePlan from "../plan_detailes/FreePlan";
import StanderdPlan from "../plan_detailes/StanderdPlan";
import InterprisePlan from "../plan_detailes/InterprisePlan";
import * as Yup from 'yup';
import Invoice from "../sub_component/Invoice";
const Main = ({data}) => {
    return (
        <main>
            <SignupForm data={data}/>
    
            <div className="main__container">
                <div className="main__title">
    
                    {data.organization.plan_details.plan_type === "trial" && (
                        <React.Fragment>
                            <div className="main__greeting">
                                <p>Current Payment Method</p>
                            
                            </div>
                            <div className={"wrapper-content"}>
                                <div className={"box1"}>
                                    <div className={"block_payment"}>
                                        <div className={"status"}>
                                            <img id={"img"} src={img} alt="logo"/>
                                            <p id={"style_p"}>Current Payment Method</p>
                                        </div>
                                        <div>
                                            <AddPayment/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </React.Fragment>
                    
                    )}
    
                    {data.organization.plan_details.plan_type === "trial" && (
                        <div>
                            <div className="main__greeting">
                                <p>Current Payment Method</p>
            
                            </div>
                            <div className={"wrapper-content"}>
                                <div className={"box1"}>
                                    <div className={"block_payment"}>
                                        <div className={"status"}>
                                            <img id={"img"} src={visa} alt="logo"/>
                                            <p id={"style_p"}>VISA *5557
                                                John Doe</p>
                                        </div>
                                        <div>
                                            <UpdatePayment/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    
                </div>
            </div>
            
            
        </main>
    )
}

export default Main