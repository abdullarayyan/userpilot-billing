import "../main/Main.css"
import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./form_information.css"
import Select_op from "../sub_component/select";
import img from "../../assets/Untitled1111.png";
import visa from "../../assets/visa.png"
import AddPayment from "../payment_method/AddPaymentMethode";
import UpdatePayment from "../payment_method/UpdatePaymentMethode";
import FreePlan from "../plan_detailes/FreePlan";
import StanderdPlan from "../plan_detailes/StanderdPlan";
import InterprisePlan from "../plan_detailes/InterprisePlan";

const SignupForm = ({data}) => {
    
    const free = React.useMemo(() => true, []);
    const pre = (data.organization.plan_details.applications[0].production_usage) / 2000
    
    const formik = useFormik({
        initialValues: {
            name: '',
            primary_contact: '',
            billing_contacts: '',
            billing_address: '',
            var_number: '',
            additional_information: '',
        },
        initialValues1: {
            name1: 'data.organization.name',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        
    });
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <div className="main__greeting">
                        <p>organization information</p>
                        <form onSubmit={formik.handleSubmit} className={"form-wrapper"}>
                            <div className="form">
                                <div className="a" id="a">
                                    <label htmlFor="name">Organization Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={data.organization.name}
                                    />
                                    {formik.initialValues.name !== data.organization.name && (
                                        <div>{"form.errors.firstName"}</div>
                                    )}
                                    <label htmlFor="primary_contact">Primary Organization Contact</label>
                                    <input name="contact" id="contact"
                                           onChange={formik.handleChange}
                                           value={data.organization.primary_contact}>
                                    </input>
                                    <label htmlFor="billing_contact">Billing Contact(s)</label>
                                    <Select_op
                                        name="billing_contact" id="billing_contact"
                                        onChange={formik.handleChange}
                                        option={data}
                                        value={data.organization.billing_contacts}
                                    />
                                </div>
                                <div className="b">
                                    <label htmlFor="billing_address">Billing Address</label>
                                    <textarea name="billing_address"
                                              id="user_text"
                                              aria-multiline
                                              onChange={formik.handleChange}
                                              value={data.organization.billing_address}>
                                        </textarea>
                                </div>
                                <div className="c">
                                    <label htmlFor="var_number">VAT Number</label>
                                    <input
                                        id="number"
                                        name="var_number"
                                        type="text"
                                        placeholder="123 456 789"
                                        onChange={formik.handleChange}
                                        value={data.organization.var_number}
                                    />
                                    <label htmlFor="additional_information">Additional Information</label>
                                    <textarea
                                        id="additional_text"
                                        name="additional_information"
                                        placeholder="add any additional info here"
                                        onChange={formik.handleChange}
                                        value={data.organization.additional_information}>
                                        </textarea>
                                </div>
                            </div>
                            <div className="submit">
                                {formik.initialValues.name !== data.organization.name && (
                                    <div>
                                        <button type="submit" id="save">Save</button>

                                    </div>
                                )}
                            </div>
                        </form>
                    
                    </div>
                    
                    {data.organization.plan_details.plan_type === "trial" && (
                        <React.Fragment>
                        <FreePlan data={data}/>
                        
                        </React.Fragment>
                    )}
                    
                    
                    {data.organization.plan_details.plan_type === "" && (
                        <React.Fragment>
                            <StanderdPlan data={data}/>
                        </React.Fragment>
                    )}
                    
                    
                    {data.organization.plan_details.plan_type === "" && (
                        <React.Fragment>
                            <InterprisePlan data={data}/>
                        </React.Fragment>
                    )}
                    
                    
                    {data.organization.plan_details.plan_type && (
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
                    
                    
                    {data.organization.plan_details.plan_type && (
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
                    <div className={"wrapper-content"}>
                        <div className={"box_invoice"}>
                            <div className={"block_invoice"}>
                                <table id={"table"}>
                                    <tr>
                                        <th id={"th-invoice"}>Date & TIME</th>
                                        <th>PLAN</th>
                                        <th>AMOUNT</th>
                                        <th>DETAILS</th>
                                    </tr>
                                </table>
                            
                            </div>
                            
                            {data.organization.invoices.map(val => (
                                <div key={val}>
                                    <div className={"box_invoice2"}>
                                        <table id={"table"}>
                                            <tr>
                                                <th>{val.date_time}</th>
                                                <th>{val.plan}</th>
                                                <th>{val.amount}</th>
                                                <th>{val.invoice_number}</th>
                                            </tr>
                                            <div className={"data_table"}>
                                            
                                            </div>
                                        </table>
                                        
                                        <div>
                                            {/*<button id={"add_payment"}>Add Payment Method</button>*/}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className={"box_invoice2"}>
                                <table id={"table"}>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th className={"end"}>View | Download</th>
                                    </tr>
                                    <div className={"data_table"}>
                                    
                                    </div>
                                </table>
                                
                                <div>
                                    {/*<button id={"add_payment"}>Add Payment Method</button>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignupForm