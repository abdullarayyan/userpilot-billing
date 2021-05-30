import React, {useState} from "react";
import SlidingPane from "react-sliding-pane"
import "./../payment_method/payment_method.css"
import img from "../../assets/paymentIcon.png";
import close from "../../assets/clos.png";
import bye from "../../assets/bye.png"
import "../../components/change_plan/free_plan.css"
import "../../components/change_plan/downdrade.css"
import "./footer.css"

const LeastCancellation = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    
    return (
        <div>
            <button id={"btn--2"} onClick={() => setState({isPaneOpenLeft: true})}>
                Cancel Subscription
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
                        
                        <p id={"p-11"}><span><h3>Subscription Canceled
                        </h3></span>
                        </p>
                    </div>
                </div>
                
                <div className={"card3"} id={"cared3"}>
                    <div id={"input"} className={"input-"}>
                       <img id={"bye"} src={bye}/>
                    </div>
                </div>
                <div className={"card3"} id={"cared3"}>
                    <div id={"input"} className={"input-"}>
                        <p id={"p-11"}> Thanks for your help. Your opinion is really important to us
                            <span><h3>You subscription has been successfully canceled.
                            </h3></span>
                        </p>
                    </div>
                </div>

                <div className={"content_d"}>
                    <div className={"coupon"}>
                    
                    </div>
                </div>
                <div className={"content_d"}>
                    <div className={"btn"}>
                        
                        
                        <button id={"button"} type={"submit"}>done</button>
                    </div>
                </div>
            </SlidingPane>
        </div>
    );
    
}
export default LeastCancellation