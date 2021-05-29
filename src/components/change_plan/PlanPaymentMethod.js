import React, {useState} from 'react'
import SlidingPane from "react-sliding-pane"
import "../../components/payment_method/payment_method.css"
import img from "../../assets/paymentIcon.png";
import flight from "../../assets/flight_icon.png";
import hint from "../../assets/hint.png"
import close from "../../assets/clos.png"
import enterprise from "../../assets/enterprise_icon.png"
import "./free_plan.css"
import Horizontal from "../sub_component/RangeSlider";
import Downgrade_plan from "./DowngradePlan";


const AddPlan = ({data}) => {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    
    const initial_price = 390;
    const [price, setPrice] = useState(initial_price)
    
    function onclick(ToPay) {
        if (ToPay === "monthly") {
            setPrice(initial_price)
        } else if (ToPay === "yearly") {
            setPrice(initial_price - (initial_price * (15 / 100)))
        }
    }
    
    const [sliderValue, setSliderValue] = useState(data.organization.plan_details.mua);
    return (
        <div>
            <button id={"button"} onClick={() => setState({isPaneOpenLeft: true})}>
                Change Plan
            </button>
            <SlidingPane
                closeIcon={<div>
                    <img id={"img"} src={close} alt="logo"/>
                </div>}
                isOpen={state.isPaneOpenLeft}
                // title="Add Payment Method"
                from="left"
                width="100%"
                onRequestClose={() => setState({isPaneOpenLeft: false})}
            >
                <div className={"content_p"}>
                    <div className={"wrapper__content"}>
                        <div className={"sub__title"}>
                            {(data.organization.plan_details.plan_type === "trial") && (
                                <React.Fragment>
                                    <h1>Turn your product into a growth engine</h1>
                                </React.Fragment>
                            )}
                            
                            {(data.organization.plan_details.plan_type === "standard") &&
                            ((data.organization.plan_details.mua) === (sliderValue)) && (
                                <React.Fragment>
                                    <h1>Your current plan is Standard</h1>
                                </React.Fragment>
                            )}
                            {(data.organization.plan_details.plan_type === "standard") &&
                            ((data.organization.plan_details.mua) < (sliderValue)) && (
                                <React.Fragment>
                                    <h1>Turn your product into a growth engine</h1>
                                </React.Fragment>
                            )}
                            {(data.organization.plan_details.plan_type === "standard") &&
                            ((data.organization.plan_details.mua) > (sliderValue)) && (
                                <React.Fragment>
                                    <h1>Turn your product into a growth engine</h1>
                                </React.Fragment>
                            )}
                        </div>
                        <div className={"pay__plan"}>
                            <div className={"left"}>
                                <h4 id={"h__4"}>How would you like to pay?
                                </h4>
                                <div className="switches-container">
                                    <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly"
                                           checked="checked"
                                    
                                    />
                                    <input type="radio" id="switchYearly" name="switchPlan" value="Yearly"
                                    
                                    />
                                    <label htmlFor="switchMonthly" onClick={() => {
                                        onclick("monthly")
                                    }}>Monthly</label>
                                    <label htmlFor="switchYearly"
                                           onClick={() => {
                                               onclick("yearly")
                                           }}>Annually</label>
                                    <div className="switch-wrapper">
                                        <div className="switch">
                                            <div>Monthly</div>
                                            <div id={"q"}>Annually</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"center_info"}>
                                <div className={"center_title"}>
                                    <h4 id={"h__4"}>Monthly Active Users
                                    </h4>
                                    <img id={"img--"} src={hint} alt="logo"/>
                                </div>
                                <div className={"demo"}>
                                    
                                    <h1 id={"h__1"}>{sliderValue}</h1>
                                </div>
                            </div>
                        </div>
                        
                        <div className={"size"}>
                            <Horizontal data={data}
                                        onChange={value => {
                                            setSliderValue(value)
                                        }}/>
                        </div>
                        
                        {(data.organization.plan_details.plan_type === "trial") && (
                            <React.Fragment>
                                <div className={"card__type"}>
                                    <div className={"card__a"}>
                                        <div className={"element"}>
                                            <img id={"img"} src={flight} alt="logo"/>
                                            <h1 id={"h_1"}>Standard</h1>
                                            <h1 id={"h_2"}>${price}</h1>
                                            <h1 id={"h_3"}>per month</h1>
                                            <button id={"btn__a"} type={"submit"}>Buy Now</button>
                                            <div className={"list"}>
                                                <li>People & Tracking</li>
                                                <li>Growth Insight</li>
                                                <li>Engagement Layer</li>
                                                <li>User Sentiment</li>
                                                <li>Reporting, Targeting z Customization</li>
                                                <li>Integrations</li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"card__b"}>
                                        <div className={"element"}>
                                            <img id={"img"} src={enterprise} alt="logo"/>
                                            <h1 id={"h_1"}>Enterprise</h1>
                                            <h1 id={"h__2"}>Reach out for pricing</h1>
                                            <h1 id={"h__3"}>Let’s talk</h1>
                                            <button id={"btn__b"} type={"submit"}>Contact Us</button>
                                            <div className={"list"}>
                                                <h3 id={"h___3"}>Everything in Standard +</h3>
                                                <li>Unlimited Seats</li>
                                                <li>Unlimited Feature Tags</li>
                                                <li>Phone Support & priority Troubleshooting</li>
                                                <li>Security Audit</li>
                                                <li> Service Level Agreement (SLA)</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                        
                        {(data.organization.plan_details.plan_type === "standard") &&
                        ((data.organization.plan_details.mua) === (sliderValue)) && (
                            <React.Fragment>
                                <div className={"card__type"}>
                                    <div className={"card__a"} id={"hover"}>
                                        <div className={"element"}>
                                            <img id={"img"} src={flight} alt="logo"/>
                                            <h1 id={"h_1"}>Standard</h1>
                                            <h1 id={"h_2"}>$399</h1>
                                            <h1 id={"h_3"}>per month</h1>
                                            <button id={"btn__a"} type={"submit"}>Your Current Plan</button>
                                            <div className={"list"}>
                                                <li>People & Tracking</li>
                                                <li>Growth Insight</li>
                                                <li>Engagement Layer</li>
                                                <li>User Sentiment</li>
                                                <li>Reporting, Targeting z Customization</li>
                                                <li>Integrations</li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"card__b"}>
                                        <div className={"element"}>
                                            <img id={"img"} src={enterprise} alt="logo"/>
                                            <h1 id={"h_1"}>Enterprise</h1>
                                            <h1 id={"h__2"}>Reach out for pricing</h1>
                                            <h1 id={"h__3"}>Let’s talk</h1>
                                            <button id={"btn__b"} type={"submit"}>Contact Us</button>
                                            <div className={"list"}>
                                                <h3 id={"h___3"}>Everything in Standard +</h3>
                                                <li>Unlimited Seats</li>
                                                <li>Unlimited Feature Tags</li>
                                                <li>Phone Support & priority Troubleshooting</li>
                                                <li>Security Audit</li>
                                                <li> Service Level Agreement (SLA)</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                        
                        {data.organization.plan_details.plan_type === "enterprise" && (
                            <React.Fragment>
                                <div className={"card__type"}>
                                    <div className={"card__a"} id={"hover"}>
                                        <div className={"element"}>
                                            <img id={"img"} src={flight} alt="logo"/>
                                            <h1 id={"h_1"}>Standard</h1>
                                            <h1 id={"h_2"}>$399</h1>
                                            <h1 id={"h_3"}>per month</h1>
                                            <button id={"btn__a"} type={"submit"}>Buy Now</button>
                                            <div className={"list"}>
                                                <li>People & Tracking</li>
                                                <li>Growth Insight</li>
                                                <li>Engagement Layer</li>
                                                <li>User Sentiment</li>
                                                <li>Reporting, Targeting z Customization</li>
                                                <li>Integrations</li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"card__b"}>
                                        <div className={"element"}>
                                            <img id={"img"} src={enterprise} alt="logo"/>
                                            <h1 id={"h_1"}>Enterprise</h1>
                                            <h1 id={"h__2"}>Reach out for pricing</h1>
                                            <h1 id={"h__3"}>Let’s talk</h1>
                                            <button id={"btn__b"} type={"submit"}>Your Current Plan</button>
                                            <div className={"list"}>
                                                <h3 id={"h___3"}>Everything in Standard +</h3>
                                                <li>Unlimited Seats</li>
                                                <li>Unlimited Feature Tags</li>
                                                <li>Phone Support & priority Troubleshooting</li>
                                                <li>Security Audit</li>
                                                <li> Service Level Agreement (SLA)</li>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                        
                        {(data.organization.plan_details.plan_type === "standard") &&
                        ((data.organization.plan_details.mua) > (sliderValue)) && (
                            <React.Fragment>
                                <div className={"card__type"}>
                                    <div className={"card__a"} id={"hover"}>
                                        <div className={"element"}>
                                            <img id={"img"} src={flight} alt="logo"/>
                                            <h1 id={"h_1"}>Standard</h1>
                                            <h1 id={"h_2"}>$399</h1>
                                            <h1 id={"h_3"}>per month</h1>
                                            {/*<button id={"btn__a_d"} type={"submit"}>Downgrade_plan</button>*/}
                                            <Downgrade_plan/>
                                            <div className={"list"}>
                                                <li>People & Tracking</li>
                                                <li>Growth Insight</li>
                                                <li>Engagement Layer</li>
                                                <li>User Sentiment</li>
                                                <li>Reporting, Targeting z Customization</li>
                                                <li>Integrations</li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"card__b"}>
                                        <div className={"element"}>
                                            <img id={"img"} src={enterprise} alt="logo"/>
                                            <h1 id={"h_1"}>Enterprise</h1>
                                            <h1 id={"h__2"}>Reach out for pricing</h1>
                                            <h1 id={"h__3"}>Let’s talk</h1>
                                            <button id={"btn__b"} type={"submit"}>Contact Us</button>
                                            <div className={"list"}>
                                                <h3 id={"h___3"}>Everything in Standard +</h3>
                                                <li>Unlimited Seats</li>
                                                <li>Unlimited Feature Tags</li>
                                                <li>Phone Support & priority Troubleshooting</li>
                                                <li>Security Audit</li>
                                                <li> Service Level Agreement (SLA)</li>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                        
                        {(data.organization.plan_details.plan_type === "standard") &&
                        ((data.organization.plan_details.mua) < (sliderValue)) && (
                            <React.Fragment>
                                <div className={"card__type"}>
                                    <div className={"card__a"} id={"hover"}>
                                        <div className={"element"}>
                                            <img id={"img"} src={flight} alt="logo"/>
                                            <h1 id={"h_1"}>Standard</h1>
                                            <h1 id={"h_2"}>$399</h1>
                                            <h1 id={"h_3"}>per month</h1>
                                            <button id={"btn__a"} type={"submit"}>Upgrade</button>
                                            <div className={"list"}>
                                                <li>People & Tracking</li>
                                                <li>Growth Insight</li>
                                                <li>Engagement Layer</li>
                                                <li>User Sentiment</li>
                                                <li>Reporting, Targeting z Customization</li>
                                                <li>Integrations</li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"card__b"}>
                                        <div className={"element"}>
                                            <img id={"img"} src={enterprise} alt="logo"/>
                                            <h1 id={"h_1"}>Enterprise</h1>
                                            <h1 id={"h__2"}>Reach out for pricing</h1>
                                            <h1 id={"h__3"}>Let’s talk</h1>
                                            <button id={"btn__b"} type={"submit"}>Contact Us</button>
                                            <div className={"list"}>
                                                <h3 id={"h___3"}>Everything in Standard +</h3>
                                                <li>Unlimited Seats</li>
                                                <li>Unlimited Feature Tags</li>
                                                <li>Phone Support & priority Troubleshooting</li>
                                                <li>Security Audit</li>
                                                <li> Service Level Agreement (SLA)</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </SlidingPane>
        </div>
    );
    
}

export default AddPlan