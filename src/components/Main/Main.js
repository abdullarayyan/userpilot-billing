import React from 'react';
import "./Main.css"
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./mainstyle.css"
import img from "../../assets/paymentIcon.png";
import visa from "../../assets/visa.png"
import AddPayment from "../payment_method/AddPaymentMethode";
import UpdatePayment from "../payment_method/UpdatePaymentMethode";
import FreePlan from "../plan_detailes/FreePlan";
import StandardPlan from "../plan_detailes/StandardPlan";
import EnterprisePlan from "../plan_detailes/EnterprisePlan";
import Invoice from "../sub_component/Invoice";
import FormData from "../Form/FormData";

const Main = ({data}) => {
    
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <div className="main__greeting">
                        <p>organization information</p>
                        <FormData data={data}/>
                    </div>
                    
                    {data.organization.plan_details.plan_type === "trial" && (
                        <React.Fragment>
                            <FreePlan data={data}/>
                        </React.Fragment>
                    )}
                    
                    
                    {data.organization.plan_details.plan_type === "standard" && (
                        <React.Fragment>
                            <StandardPlan data={data}/>
                        </React.Fragment>
                    )}
                    
                    
                    {data.organization.plan_details.plan_type === "enterprise" && (
                        <React.Fragment>
                            <EnterprisePlan data={data}/>
                        </React.Fragment>
                    )}
                    
                    
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
                    
                    
                    {data.organization.plan_details.plan_type !== "trial"
                    && (
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
                    
                    <div className="main__greeting">
                        <p>Invoices</p>
                    </div>
                    <Invoice data={data}/>
                </div>
            </div>
        </main>
    );
};

export default Main