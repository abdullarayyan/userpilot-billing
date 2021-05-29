import React from "react";
import "./Invoice.css";

const Invoice = ({ data }) => {
    return (
        <div className="box_invoice">
            <div className="block_invoice">
                <div className="field">DATE & TIME</div>
                <div className="field">PLAN</div>
                <div className="field">AMOUNT</div>
                <div className="field">DETAILS</div>
            </div>
            
            {data.organization.invoices.map((value, key) => {
                return getInvoice(value, key);
            })}
        </div>
    );
};

const getInvoice = (value, key) => {
    return (
        <div key={key} className="data">
            <div className="data-invoices data-date">{value.date_time}</div>
            <div className="data-invoices">{value.plan}</div>
            <div className="data-invoices">${value.amount}</div>
            <div className="data-details">
                <div className="data-invoices">Invoice #{value.invoice_number}</div>
                <div className="view">View | Download</div>
            </div>
        </div>
    );
};

export default Invoice;
