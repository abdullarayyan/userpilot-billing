// import React, {useMemo} from 'react'
import Select, {components} from 'react-select'
import { useEffect, useMemo } from "react"

const Select_op = ({option}) => {
    
    const data = useMemo(()=>{
        console.log({option})
        if (option&&option.organization && option.organization.billing_contacts){
            return option.organization.billing_contacts.map(email=>({
                lable:email,
                value:email,
            }))
        }
        return []
        
    },[option])
    // console.log(option+'kdkdkd')
    return (
        
            <Select
                isMulti
                options={data}
            />
        
    )
}
export default Select_op