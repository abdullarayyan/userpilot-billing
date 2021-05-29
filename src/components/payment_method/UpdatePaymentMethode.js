import React, {useState} from "react";
import SlidingPane from "react-sliding-pane"
import "./payment_method.css"
import img from "../../assets/paymentIcon.png";
import visa from "../../assets/visa.png";
import hint from "../../assets/hint.png";
import close from "../../assets/clos.png";

const UpdatePayment = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    
    return (
        <div>
            <button id="add_payment" onClick={() => setState({isPaneOpenLeft: true})}>
                Update Method
            </button>
            <SlidingPane
                
                
                isOpen={state.isPaneOpenLeft}
                title="Update Payment Method"
                from="right"
                width="500px"
                onRequestClose={() => setState({isPaneOpenLeft: false})}
                closeIcon={<div>
                    <img id={"img"} src={close} alt="logo"/>
                </div>}
            >
                <div className={"content_p"}>
                    
                    <div className={"row_1"}>
                        <div className={"content_info"}>
                            <label>Card Number</label>
                            <div className={"img"}>
                                
                                <input
                                    id="card_number"
                                    name="card_number"
                                    type="number"
                                />
                                <img id={"img"} src={visa} alt="logo"/>
                            </div>
                            <label>Card Holder Name</label>
                            <input
                                id="card_holder_number"
                                name="card_holder_number"
                                type="name"
                            />
                        </div>
                    </div>
                    <div className={"content_date"}>
                        <div className={"expire_m"}>
                            <label>Expiry Date</label>
                            <input
                                id="month"
                                name="card_holder_number"
                                type="number"
                                placeholder={"MM"}
                            />
                        </div>
                        <div className={"expire_"}>
                            <h1 id={"cc"}>--</h1>
                        </div>
                        <div className={"expire_y"}>
                            <input
                                id="year"
                                name="card_year"
                                type="number"
                                placeholder={"YY"}
                            />
                        </div>
                    </div>
                    <div className={"content_info"}>
                        <label>CVV/CVC</label>
                        <div className={"img"}>
                            <input
                                id="csv"
                                name="card_holder_number"
                                type="number"
                                placeholder={"1234"}
                            />
                            <img id={"img-"} src={hint} alt="logo"/>
                        </div>
                    </div>
                </div>
                <div className={"content_d"}>
                    <div className={"coupon"}>
                    </div>
                </div>
                <div className={"content_d"}>
                    <div className={"btn"}>
                        
                        <button id={"btn-3"} type={"submit"}>Cancel</button>
                        
                        <button id={"btn-4"} type={"submit"}>Update & Pay</button>
                    </div>
                </div>
            </SlidingPane>
        </div>
    );
    
}

export default UpdatePayment