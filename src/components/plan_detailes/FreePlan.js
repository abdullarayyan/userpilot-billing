import React from 'react';
import "../main/Main.css"
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../main/mainstyle.css"
import Charts from "../chart/Chart";
import icon from "../../assets/free_palnIcon.png"
import img from "../../assets/paymentIcon.png";
import AddPlan from "../change_plan/PlanPaymentMethod";


const FreePlan = ({data}) => {
    const free = React.useMemo(() => true, []);
    const mau = data.organization.plan_details.applications.reduce(
        (sum, pointer) => {
            return sum + pointer.production_usage + pointer.staging_usage;
        },
        0);
    const formula = mau / data.organization.plan_details.mua;
    
    
    return (
        <div>
            <div className="main__greeting">
                <p>Plan Details</p>
            
            </div>
            <div className={"wrapper-content"}>
                <div className={"plan"}>
                    <div className={"parent_block"}>
                        <div className={"ico"}>
                            <img src={icon} alt="logo"/>
                        </div>
                        <div className={"block"}>
                            <div className={"type"}>
                                <h1 id={"hh"}><span>You are on the</span> <span id={"text-red"}>Free Plan</span>
                                </h1>
                                <AddPlan data={data}/>
                            </div>
                            <div className={"p"}>
                                <p>Your plan expires on {data.organization.plan_details.plan_expiry}</p>
                            </div>
                        </div>
                    
                    
                    </div>
                    <div className={"table"}>
                        <table id="customers">
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>Monthly Active Users Allowed
                                </td>
                                <td>2500</td>
                            </tr>
                            <tr>
                                <td>Monthly Cost</td>
                                <td>$0</td>
                            </tr>
                        </table>
                    </div>
                    <br/>
                    <div>
                        
                        <div className={"Plan_Usage"}>
                            <h1 id={"plan_usage"}>Plan Usage
                            </h1>
                            {data.organization.plan_details.applications.map(val => (
                                <div className={"card3"} id={"card-plan"} key={val}>
                                    <h4 className={"h4"}>{val.application_name}</h4>
                                    <div>
                                        <div className={"table"}>
                                            <table id="customers-1">
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                                <tr>
                                                    <td id={"td1"}>Production</td>
                                                    <td>{val.production_usage}</td>
                                                </tr>
                                                {free && (
                                                    <React.Fragment>
                                                        <tr>
                                                            <td id={"td1"}>Staging</td>
                                                            <td>{val.staging_usage}</td>
                                                        </tr>
                                                    </React.Fragment>
                                                )}
                                                {!free && (
                                                    <React.Fragment>
                                                        <tr>
                                                            <td id={"td1"}>Staging</td>
                                                            <td>upgrade</td>
                                                        </tr>
                                                    </React.Fragment>
                                                )}
                                            </table>
                                        </div>
                                    
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                
                <div className={"box"}>
                    <h1 id={"plan"}>Plan Total Usage</h1>
                    <div id={"chart"}>
                        <Charts parcentage={formula}/>
                    </div>
                    <h1 id={"h"}>Total Used</h1>
                    <br/>
                    <h5><span
                        id={"span-red"}> {mau} </span> out
                        of <span id={"span-black"}>2500 MAU</span></h5>
                    <p id={"pp"}>Resets May 01, 2021 at 3:00 am
                    </p>
                </div>
            
            </div>
        </div>
    )
}

export default FreePlan