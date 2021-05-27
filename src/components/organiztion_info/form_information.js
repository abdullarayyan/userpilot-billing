import "../main/Main.css"
import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./form_information.css"
import Select_option from "../sub_component/select";
import img from "../../assets/Untitled1111.png";
import visa from "../../assets/visa.png"
import AddPayment from "../payment_method/AddPaymentMethode";
import UpdatePayment from "../payment_method/UpdatePaymentMethode";
import FreePlan from "../plan_detailes/FreePlan";
import StanderdPlan from "../plan_detailes/StanderdPlan";
import InterprisePlan from "../plan_detailes/InterprisePlan";
import * as Yup from 'yup';

const SignupForm = ({data, selectEmail}) => {
    
    const free = React.useMemo(() => true, []);
    
    
    const formik = useFormik({
        initialValues: {
            name: data.organization.name,
            primary_contact: data.organization.primary_contact,
            billing_contacts: '',
            billing_address: data.organization.billing_address,
            var_number: data.organization.var_number,
            additional_information: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(22, 'Organization Name max is 22eg.')
                .required('This field is required'),
            primary_contact: Yup.string()
                .max(22, 'Must be 20 characters or less')
                .required('This field is required'),
            billing_contacts: Yup.string().email('This field is required').required('This field is required'),
            
            billing_address: Yup.string()
                .max(100, '')
                .required('This field is required'),
            var_number: Yup.string()
                .max(22, '')
                .required('This field is required')
        }),
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
                                        value={formik.values.name}
                                        // onBlur={formik.handleBlur}
                                    />{formik.touched.name && formik.errors.name ? (
                                    <p>{formik.errors.name}</p>
                                ) : null}
                                    
                                    <label htmlFor="primary">Primary Organization Contact</label>
                                    <input id="contact" name="contact" type="text"
                                           onChange={formik.handleChange}
                                           value={formik.values.primary_contact}
                                    />
                                    {formik.touched.primary_contact && formik.errors.primary_contact ? (
                                        <p>{formik.errors.primary_contact}</p>
                                    ) : null}
                                    
                                    <label htmlFor="billing_contact">Billing Contact(s)</label>
                                    <Select_option option={data}

                                                   onChange={formik.handleChange}
                                                   value={formik.values.billing_contacts}
                                    />
                                    {formik.touched.billing_contacts && formik.errors.billing_contacts ? (
                                        <p>{formik.errors.billing_contacts}</p>
                                    ) : null}
                                    
                              
                                </div>
                                <div className="b">
                                    <label htmlFor="billing_address">Billing Address</label>
                                    <textarea name="billing_address"
                                              id="user_text"
                                              aria-multiline
                                              onChange={formik.handleChange}
                                              value={formik.values.billing_address}>
                                        </textarea>
                                    {formik.touched.billing_address && formik.errors.billing_address ? (
                                        <p>{formik.errors.billing_address}</p>
                                    ) : null}
                                </div>
                                <div className="c">
                                    <label htmlFor="var_number">VAT Number</label>
                                    <input
                                        id="number"
                                        name="var_number"
                                        type="text"
                                        placeholder="123 456 789"
                                        onChange={formik.handleChange}
                                        value={formik.values.var_number}
                                    />
                                    {formik.touched.var_number && formik.errors.var_number ? (
                                        <p>{formik.errors.var_number}</p>
                                    ) : null}
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
                                <div>
                                    <button type="submit" id="save">Save</button>
                                </div>
                               
                            
                            </div>
                        </form>
                    
                    </div>
                    
                    {data.organization.plan_details.plan_type === "trial" && (
                        <React.Fragment>
                            <FreePlan data={data}/>
                        
                        </React.Fragment>
                    )}
                    
                    
                    {data.organization.plan_details.plan_type === "standard" && (
                        <React.Fragment>
                            <StanderdPlan data={data}/>
                        </React.Fragment>
                    )}
                    
                    
                    {data.organization.plan_details.plan_type === "enterprise" && (
                        <React.Fragment>
                            <InterprisePlan data={data}/>
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
                    
                    
                    {data.organization.plan_details.plan_type === "standard" && (
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
                            
                            {data.organization.invoices.map(value => (
                                <div key={value}>
                                    <div className={"box_invoice2"}>
                                        <table id={"table"}>
                                            <tr>
                                                <th>{value.date_time}</th>
                                                
                                                <th>{value.plan}</th>
                                                <th>{value.amount}</th>
                                                <th>{value.invoice_number}</th>
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