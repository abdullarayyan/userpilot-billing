import React, {Component, useState} from "react";
import SlidingPane from "react-sliding-pane"
import "./../payment_method/payment_method.css"
import img from "../../assets/Untitled1111.png";
import close from "../../assets/clos.png";
import enterprise from "../../assets/interprise_icon.png"
import "../../components/change_plan/free_plan.css"
import "../../components/change_plan/downdrade.css"
import "./footer.css"

const Cancellation = ({data}) => {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    
    return (
        <div>
            <a id={"link"} onClick={() => setState({isPaneOpenLeft: true})}>
                Cancel Subscription
            </a>
            <SlidingPane
                isOpen={state.isPaneOpenLeft}
                title="Downgrade_plan your plan"
                from="right"
                width="500px"
                onRequestClose={() => setState({isPaneOpenLeft: false})}
                closeIcon={<div>
                    <img id={"img"} src={close} alt="logo"/>
                </div>}
            >
                
                <div className={"card3"} id={"cared3"}>
                    <div className={"coupon"}>
                        
                        <p id={"p-11"}><span><h3>Are you sure you want to cancel your subscription?</h3></span> You
                            
                            will not longer have access to Userpilot features after
                            
                            May 20, 2021.
                        </p>
                    </div>
                </div>
                
                <div className={"card3"} id={"cared3"}>
                    <div className={"coupon"} id={"card_3"}>
                        <dive className={"content_card"}>
                            <div className={"photo"}>
                                <img id={"img"} src={close} alt="logo"/>
                            </div>
                            <div className={"content_card_t"}>
                                <div>
                                    <h1 id={"hc"}>Have Issues or Questions?</h1>
                                    <p id={"pc"}>Our support team can help you with any
                                        problems you might be facing</p>
                                    <button id={"bc"} className={"fas fa-comment"}>Contact Us</button>
                                </div>
                            </div>
                        </dive>
                    </div>
                </div>
    
                <div className={"card3"} id={"cared3"}>
                    <div className={"coupon"} id={"card_4"}>
            
                        <dive className={"content_card"}>
                            <div className={"photo"}>
                                <img id={"img"} src={enterprise} alt="logo"/>
                            </div>
                            <div className={"content_card_t"}>
                                <div>
                                    <h1 id={"hc"}>Try a Different Plan?</h1>
                                    <p id={"pc"}>Unsatisfied with your plan? Try another
                                    </p>
                                    <button id={"bc1"} className={"fas fa-comment"}>Change plan</button>
                                </div>
                            </div>
                        </dive>
        
        
                    </div>
                </div>
                <div className={"content_d"}>
                    <div className={"coupon"}>
                    
                    </div>
                </div>
                <div className={"content_d"}>
                    <div className={"btn"}>
                        
                        <button id={"btn--1"} type={"submit"}>Close</button>
                        
                        <button id={"btn--2"} type={"submit"}>Continue to Cancelation</button>
                    </div>
                </div>
            </SlidingPane>
        </div>
    );
    
}
export default Cancellation