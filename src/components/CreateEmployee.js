import React, {useState} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

export default function  CreateEmployee() {

    const navigate = useNavigate();
    const base_url = 'https://comp3123-assignment-2.herokuapp.com/api/emp/employees';
    

    const [employee, setEmployee] = useState({
        first_name: '',
        last_name: '',
        email_id: '',
        employee:[]

    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setEmployee({...employee, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        const newEmployee = {
            first_name: employee.first_name,
            last_name: employee.last_name,
            email_id: employee.email_id
        }

        console.log("New Employee Added");
        axios.post(base_url, newEmployee)
            .then(res => console.log(res.data));
    }
    
    return (
            <div>
                <div style={{marginTop:"20px", marginBottom:"20px"}} className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group d-block">
                                    <label>First Name: </label>
                                    <input className="form-control" name="first_name" placeholder="Enter a first name"
                                    onChange={e => handleInputChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input  className="form-control" name="last_name" placeholder="Enter a last name"
                                    onChange={e => handleInputChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <label>Email Id: </label>
                                    <input className="form-control" name="email_id" placeholder="Enter an email address"
                                    onChange={e => handleInputChange(e)}/>
                                </div>
                                <Button variant="primary" onClick={e => onSubmit(e)}>Submit</Button>
                                    &nbsp;&nbsp;&nbsp;
                                <Link to={"/employees"}><Button className="btn btn-danger" >Cancel</Button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
}