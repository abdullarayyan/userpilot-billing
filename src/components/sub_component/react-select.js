// import React, { Component } from 'react'
// import Select, {components} from 'react-select'
// import { useEffect, useMemo } from "react";
//
// const ComponentSelect = ({option}) => {
//     const Select = useMemo(()=>{
//         console.log({option})
//         if (option&&option.organization && option.organization.billing_contacts){
//             return option.organization.billing_contacts.map(email=>({
//                 lable:email,
//                 value:email,
//             }))
//         }
//         return []
//
//     },[option])
//     return(
//         <div>
//     <Select
//         isMulti
//         options={Select}
//     />
//         </div>
//     )
// }
//
//
//
// export default ComponentSelect
