import React from "react";
import Chart from "react-apexcharts";

export default class charts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            seriesRadial: [this.props.parcentage * 100],
            optionsRadial: {
                plotOptions: {
                    radialBar: {
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
                        dataLabels: {
                            showOn: "always",
                        }
                    }
                },
                fill: {
                    type: "gradient",
                    colors: ["#e23c7d"],
                    gradient: {
                        shade: "dark",
                        type: "horizontal",
                        shadeIntensity: 0.5,
                        gradientToColors: ["#5f00c2"],
                        inverseColors: false,
                        opacityFrom: [1],
                        opacityTo: [1],
                        stops: [0, 50]
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: [""]
            }
        };
    }
    
    render() {
        return (
            <Chart
                options={this.state.optionsRadial}
                series={this.state.seriesRadial}
                color="#43467F"
                type="radialBar"
                width="400"
                align="center"
            />
        );
    }
}
