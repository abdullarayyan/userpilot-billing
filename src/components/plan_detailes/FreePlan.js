import "../main/Main.css"
import React, {useEffect, useState} from 'react';
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../organiztion_info/form_information.css"
import Charts from "../chart/Chart";
import icon from "../../assets/Untitle111d.png"
import img from "../../assets/Untitled1111.png";
import AddPlan from "../change_plan/growth_engine";


const FreePlan = ({data}) => {
    const free = React.useMemo(() => true, []);
    const pre = (data.organization.plan_details.applications[0].production_usage) / 2000
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
                                <div className={"card3"} key={val}>
                                    <h4 className={"h4"}>{val.application_name}</h4>
                                    <div>
                                        <div className={"table"}>
                                            <table id="customers">
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
                        <Charts parcentage={pre}/>
                    </div>
                    <h1 id={"h"}>Total Used</h1>
                    <br/>
                    <h5><span
                        id={"span-red"}> {data.organization.plan_details.applications.production_usage} </span> out
                        of <span id={"span-black"}>2500 MAU</span></h5>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default FreePlan