import React, {useState} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";

export default function  CreateEmployee() {

    const {register,formState: { errors },handleSubmit} = useForm();

    const notifySuccess = () => toast("Employee Created Successfully!")
    
    const notifyError = () => toast.warn('Please check again the email!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    
    const notifyErrorFirstName = () => toast.error('First Name cannot be empty', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;

        const notifyErrorLastName = () => toast.error('Last Name cannot be empty', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });;
            
        const notifyErrorEmail = () => toast.error('Email cannot be empty', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });;
    
        const notifyErrorEmailFormat = () => toast.error('Email format is incorrect', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
    
    const navigate = useNavigate();
    const base_url = 'https://comp3123-assignment2-backend.herokuapp.com/api/emp/employees';
    

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

        if (newEmployee.first_name.length <= 0 || newEmployee.last_name.length <= 0 || newEmployee.email_id.length <= 0) {
            if (newEmployee.first_name.length <= 0) {
                notifyErrorFirstName();
            }
            if (newEmployee.last_name.length <= 0) {
                notifyErrorLastName();
            }
            if (newEmployee.email_id.length <= 0) {
                notifyErrorEmail();
            }
        } else if (!newEmployee.email_id.includes('@')) {
            notifyErrorEmailFormat();
            } 
        else {
            axios.post(base_url, newEmployee)
            .then(res => {
                notifySuccess();
                navigate('/employees');
            })
            .catch(err => {
                notifyError()
            })
        }
    }
    
    return (
            <div>
                <div style={{marginTop:"20px", marginBottom:"20px"}} className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">

                            <form onSubmit={e => handleSubmit(onSubmit(e))}>
                                <div className="form-group d-block">
                                    <label>First Name: </label>
                                    <input className="form-control" placeholder=""
                                    {...register("first_name", { required: true })}
                                    onChange={e => handleInputChange(e)}/>
                                    <error>
                                        {errors.first_name?.type === "required" && "Name is required"}
                                    </error> 
                                </div>

                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input  className="form-control" placeholder=""
                                    {...register("last_name", { required: true })}
                                    onChange={e => handleInputChange(e)}/>
                                </div>

                                <div className="form-group">
                                    <label>Email Id: </label>
                                    <input className="form-control" placeholder=""
                                    {...register("email_id", { required: true })}
                                    onChange={e => handleInputChange(e)}/>
                                </div>

                                <Button variant="primary" onSubmit={handleSubmit(onSubmit)} type='submit'>Submit</Button>
                                    &nbsp;&nbsp;&nbsp;
                                <Link to={"/employees"}><Button className="btn btn-danger" >Cancel</Button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
            
        );
}