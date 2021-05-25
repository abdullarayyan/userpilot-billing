import React from "react";
import ReactDOM from "react-dom";
import Charts from "./Chart";

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockValue: "13,232.00",
            listedValue: "12,200.00",
            averageDiscount: "30%",
            percentageDiscounted: "10%",
            sellthru1: "78%",
            sellthru2: "88%"
        };
    }
    
    componentDidMount() {}
    
    render() {
        return (
            <Charts parcentage={per} />
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Chart />, rootElement);
