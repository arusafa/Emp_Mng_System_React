import axios from "axios";
import React, {} from "react";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';


export default function  UpdateEmploye() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getEmployeeDataByID();
// eslint-disable-next-line        
}, []);

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setEmployee({...employee, [name]: value})
    }

    const getEmployeeDataByID = async () => {
        const result = await axios.get(`https://comp3123-assignment-2.herokuapp.com/api/emp/employees/${id}`);
        setEmployee(result.data);
    }
    
        const onSubmit = (e) => {
            e.preventDefault();
            
            const newEmployee = {
                first_name: employee.first_name,
                last_name: employee.last_name,
                email_id: employee.email_id
            }
    
        console.log("Employee Updated");
        axios.put(`https://comp3123-assignment-2.herokuapp.com/api/emp/employees/${id}`, newEmployee)
            .then(res => console.log(res.data));
        
            window.location.assign("https://tubular-tanuki-5b0ef2.netlify.app/employees");
        }

        return (
            <div className="container" style={{marginBottom:"20px"}}>
                <div style={{margin:"20px"}} className="py-4">
                    <h1>Employee ID: {id}</h1>
                </div>
                <div style={{margin:"20px"}}>
                    <Link className="btn btn-warning" to="/employees">
                        <Button>Back to Employee List</Button>
                    </Link>
                </div>
                <form>
                    <div className="form-group d-block">
                        <label>First Name: </label>
                        <input className="form-control" name="first_name" placeholder={employee.first_name}
                        onChange={e => handleInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input  className="form-control" name="last_name" placeholder={employee.last_name}
                        onChange={e => handleInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Email Id: </label>
                        <input className="form-control" name="email_id" placeholder={employee.email_id}
                        onChange={e => handleInputChange(e)}/>
                    </div>
                    <Button variant="success" onClick={e => onSubmit(e)}>Update</Button>
                        &nbsp;&nbsp;&nbsp;
                    <Link to={"/employees"}><Button className="btn btn-danger" >Cancel</Button>
                    </Link>
                </form> 
            </div>
        )
}