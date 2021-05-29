import React from "react";
import "./footer.css"
import Cancellation from "./cancel_subsicribtion";

const Footer = ({data}) => {
    return (
        <footer>
            {data.organization.plan_details.plan_type !== "trial" && (
                <React.Fragment>
                    <div className={"footer_content"}>
                        <Cancellation data={data}/>
                        <p>All future payments will be canceled. Your plan ends on 11/11/2021</p>
                    </div>
                </React.Fragment>
            )}
        
        </footer>
    )
}

export default Footer