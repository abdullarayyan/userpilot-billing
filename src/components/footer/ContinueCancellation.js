import React, {useState} from "react";
import SlidingPane from "react-sliding-pane"
import "./../payment_method/payment_method.css"
import img from "../../assets/paymentIcon.png";
import close from "../../assets/clos.png";
import enterprise from "../../assets/enterprise_icon.png"
import "../../components/change_plan/free_plan.css"
import "../../components/change_plan/downdrade.css"
import "./footer.css"
import LeastCancellation from "./LeastCancellation";

const ContinueCancellation = ({data}) => {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    
    return (
        <div>
            <button id={"btn--2"} onClick={() => setState({isPaneOpenLeft: true})}>
                Continue to Cancellation
            </button>
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
                        
                        <p id={"p-11"}><span><h3>We re sorry to see you go. In order to process the cancelation,
                            we needto ask you a few simple questions.</h3></span> This will help us improve the products
                            for others.
                        </p>
                    </div>
                </div>
                
                <div className={"card3"} id={"cared3"}>
                    <p id={"p-11"}><h3>Why have you decided to cancel your subscription?
</h3>
                    </p>
                    <div id={"input"} className={"input-"}>
                    <input placeholder={"Not compatible with our product"}/>
                    <input placeholder={"Too Complicated"}/>
                    <input placeholder={"Don t have enough time to optimize Userpilot or need to rethink" +
                    "\n" +
                    "how to implement it"}/>
                    <input placeholder={"My project has finished and I no longer need Userpilot"}/>
                    <input placeholder={"Poor funtionality"}/>
                    <input placeholder={"It s too expensive"}/>
                    <input placeholder={"Going with a different provider"}/>
                    <input placeholder={"Didn t meet our expectations"}/>
                    <textarea id={"textarea"} placeholder={"other"}></textarea>
                    </div>
                </div>
                
                    {/*</div>*/}
                {/*</div>*/}
                <div className={"content_d"}>
                    <div className={"coupon"}>
                    
                    </div>
                </div>
                <div className={"content_d"}>
                    <div className={"btn"}>
                        
                        <button id={"btn--1"} type={"submit"}>Close</button>
                        
                        {/*<button id={"btn--2"} type={"submit"}>Continue to Cancelation</button>*/}
                        <LeastCancellation/>
                    </div>
                </div>
            </SlidingPane>
        </div>
    );
    
}
export default ContinueCancellation