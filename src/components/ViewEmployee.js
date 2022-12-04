import axios from "axios";
import React, {} from "react";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";


export default function  ViewEmployee() {

    const [employee, setEmployee] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getEmployeeDataByID();
// eslint-disable-next-line        
}, []);

    const getEmployeeDataByID = async () => {
        const result = await axios.get(`https://backend-assignment2-comp3123.herokuapp.com/api/emp/employees/${id}`);
        setEmployee(result.data);
    }

        return (
            <div className="container">
                <div style={{margin:"20px"}} className="py-4">
                    <h1>Employee ID: {id}</h1>
                </div>
                <div>
                    <Link className="btn btn-primary" to="/employees">
                        <Button>Back to Employee List</Button>
                    </Link>
                </div>
                <div className="row" style={{justifyContent:"center", margin:"40px"}}>
                    <div className="list-group
                    " style={{margin:"10px"}}>
                        <b><h3 className="list-group-item list-group-item-primary">First Name: {employee.first_name}</h3></b>
                        <b><h3 className="list-group-item list-group-item-light">Last Name: {employee.last_name}</h3></b>
                        <b><h3 className="list-group-item list-group-item-info">Email Id: {employee.email_id}</h3></b>
                    </div>
                </div>
            </div>
        )
}




