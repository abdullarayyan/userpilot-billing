import React from "react";
import Chart from "react-apexcharts";
import ReactDOM from "react-dom";

export default class charts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionsRadial: {
                plotOptions: {
                    radialBar: {
                        startAngle: 0,
                        endAngle: 360,
                        hollow: {
                            margin: 0,
                            size: "70%",
                            background: "#fff",
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: "front",
                            dropShadow: {
                                enabled: true,
                                top: 1,
                                left: 0,
                                blur: 1,
                                opacity: 0.100
                            }
                        },
                        track: {
                            background: "#fff",
                            strokeWidth: "50%",
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35
                            }
                        },
                        dataLabels: {
                            showOn: "always",
                            name: {
                                offsetY: -10,
                                show: true,
                                color: "#acb5bd",
                                fontSize: "16px"
                            },
                            value: {
                                formatter: function(val) {
                                    return val;
                                },
                                color: "#111",
                                fontSize: "16px",
                                show: true
                            }
                        }
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "dark",
                        type: "horizontal",
                        shadeIntensity: 0.5,
                        gradientToColors: ["#ABE5A1"],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["%"]
            },
            seriesRadial: [this.props.parcentage *100],
            
            optionsRadial1: {
                plotOptions: {
                    radialBar: {
                        // startAngle: 0,
                        endAngle: 360,
                        hollow: {
                            margin: 0,
                            size: "60%",
                            background: "#fff",
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: "front",
                            dropShadow: {
                                enabled: true,
                                top: 1,
                                left: 0,
                                blur: 1,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: "#fff",
                            strokeWidth: "37%",
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35
                            }
                        },
                        dataLabels: {
                            showOn: "always",
                            name: {
                                offsetY: 0,
                                show: true,
                                color: "#acb5bd",
                                fontSize: "19px"
                            },
                            value: {
                                formatter: function(val) {
                                    return val;
                                },
                                color: "#acb5bd",
                                fontSize: "19px",
                                show: true
                            }
                        }
                    }
                },
                fill: {
                    type: "gradient",
                    colors: ["#FF00FF"],
                    gradient: {
                        shade: "dark",
                        type: "horizontal",
                        shadeIntensity: 0.5,
                        gradientToColors: ["#BA55D3", "#43467F"],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["%"]
            }
        };
    }
    
    render() {
        return (
            <Chart
                options={this.state.optionsRadial1}
                series={this.state.seriesRadial}
                color="#43467F"
                type="radialBar"
                width="400"
                align="center"
            />
        );
    }
}
