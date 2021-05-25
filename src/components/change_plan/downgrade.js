import React, {Component, useState} from "react";
import SlidingPane from "react-sliding-pane"
import "./../payment_method/payment_method.css"
import img from "../../assets/Untitled1111.png";
import close from "../../assets/clos.png";
import "./free_plan.css"
import "./downdrade.css"

const Downgrade = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    
    return (
        <div>
            <button id="btn__a_d" onClick={() => setState({isPaneOpenLeft: true})}>
                Downgrade
            </button>
            <SlidingPane
                isOpen={state.isPaneOpenLeft}
                title="Downgrade your plan"
                from="right"
                width="500px"
                onRequestClose={() => setState({isPaneOpenLeft: false})}
                closeIcon={<div>
                    <img id={"img"} src={close} alt="logo"/>
                </div>}
            >
                <div className={"down__card"}>
                    <div className={"coupon"}>
                        <h1 id={"h-1"}>Current Plan</h1>
                        <h2 id={"h-2"}>Standard Plan</h2>
                        <h3 id={"h-3"}>Monthly Active Users: 10,000</h3>
                        <h4 id={"h-4"}>700.00/month</h4>
                    
                    </div>
                </div>
                <div className={"down__card2"}>
                    <div className={"coupon"}>
                        <h1 id={"h-1"}>Current Plan</h1>
                        <h2 id={"h-2"}>Standard Plan</h2>
                        <h3 id={"h-3"}>Monthly Active Users: 10,000</h3>
                        <h4 id={"h-4"}>700.00/month</h4>
                        <p id={"p-1"}>Any remaining days in your plan will automatically be refunded
                            
                            and discounted from the total price.</p>
                    </div>
                </div>
                <div className={"content_d"}>
                    <div className={"coupon"}>
                    
                    </div>
                </div>
                <div className={"content_d"}>
                    <div className={"btn"}>
                        
                        <button id={"btn-1"} type={"submit"}>Cancel</button>
                        
                        <button id={"btn-2"} type={"submit"}>Downgrade Plan</button>
                    </div>
                </div>
            </SlidingPane>
        </div>
    );
    
}
export default Downgrade