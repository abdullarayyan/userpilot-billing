import React from 'react';
import "../Main/Main.css"
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../Main/mainstyle.css"
import Charts from "../chart/Chart";
import img from "../../assets/paymentIcon.png";
import enterprise_icon from "../../assets/enterprise_icon.png";
import AddPlan from "../change_plan/PlanPaymentMethod";


const EnterprisePlan = ({data}) => {
    
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
                        <div className={"ico_flight"}>
                            <img src={enterprise_icon} alt="logo"/>
                        </div>
                        <div className={"block"}>
                            <div className={"type"}>
                                <h1 id={"hh"}><span>You are on the</span> <span id={"text-blue"}>Enterprise Plan</span>
                                </h1>
                                <AddPlan data={data}/>
                                {/*<button id={"button"}>Change Plan</button>*/}
                            </div>
                            <div className={"p"}>
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
                                <td>- - -</td>
                            </tr>
                            <tr>
                                <td>Monthly Cost</td>
                                <td>$1500</td>
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
                                                
                                                <tr>
                                                    <td id={"td1"}>Staging</td>
                                                    <td>{val.staging_usage}</td>
                                                </tr>
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
                    <h6>Resets May 01, 2021 at 3:00 am
                    </h6>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default EnterprisePlan