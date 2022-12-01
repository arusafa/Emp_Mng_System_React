import React from "react";


export default function EmployeeDetails (props) {

    return (
        <>
        <td style={{textAlign:"center"}} className="table-info">{props.emp._id}</td>
        <td style={{textAlign:"center",}} className="table-primary">{props.emp.first_name}</td>
        <td style={{textAlign:"center", backgroundColor:"#c6e3e8"}} className="table-succsess">{props.emp.last_name}</td>
        <td style={{textAlign:"center"}} className="table-warning">{props.emp.email_id}</td>
        </>
        )
    }

    