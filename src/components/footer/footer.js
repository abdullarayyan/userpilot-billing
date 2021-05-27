import React from "react";
import "./footer.css"
import Cancellation from "./cancel_subsicribtion";
const Footer =({data})=>{
    return(
      <footer>
          {data.organization.plan_details.plan_type === "standard"&&(
              <React.Fragment>
                  <div className={"footer_content"}>
                      {/*<a href={"#"}>Cancel Subscription</a>*/}
                      <Cancellation data={data}/>
                      <p>All future payments will be canceled. Your plan ends on 11/11/2021</p>
                  </div>
              </React.Fragment>
          )}
         
      </footer>
    )
}

export default Footer