import React from "react";
import Select from 'react-select'
import {useMemo} from "react"
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const Select_option = ({option}) => {
    
    const selectEmail = useMemo(() => {
        // console.log(option, 'podkf')
        if (option && option.organization && option.organization.billing_contacts) {
            return option.organization.billing_contacts.map(email => ({
                label: email,
                value: email,
            }))
        }
        return []
        
    }, [option])
    console.log(selectEmail, "Emails")
    
    return (
        <Select
            isMulti
            closeMenuOnSelect={false}
            options={selectEmail}
            components={animatedComponents}
        />
    )
}
export default Select_option