import axios from "axios";
import {Link} from "react-router-dom";
import React, {useEffect} from 'react';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";


export default function  UpdateEmploye() {

    const {register,handleSubmit} = useForm();

    const notifySuccess = () => toast.success("Employee Updated Successfully!",{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    
    const notifyErrorUpdate = () => toast.warn('Please check again the email!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    
    const notifyErrorFirstName = () => toast.error('First Name cannot be empty', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });;

        const notifyErrorLastName = () => toast.error('Last Name cannot be empty', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });;
            
        const notifyErrorEmail = () => toast.error('Email cannot be empty', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });;
    
        const notifyErrorEmailFormat = () => toast.error('Email format is incorrect', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })

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
        const result = await axios.get(`https://comp3123-assignment2-backend.onrender.com/api/emp/employees/${id}`);
        setEmployee(result.data);
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
                axios.put(`https://comp3123-assignment2-backend.herokuapp.com/api/emp/employees/${id}`, newEmployee)
                .then(res => {
                    notifySuccess();
                    navigate('/employees');
                })
                .catch(err => {
                    notifyErrorUpdate()
                })
            }
        }
        return (
            <div className="container" style={{marginBottom:"20px"}}>
                <div style={{margin:"20px"}} className="py-4">
                    <h1>Employee ID: {id}</h1>
                </div>

                <form onSubmit={e => handleSubmit(onSubmit(e))}>
                    <div className="form-group d-block">
                        <label>First Name: </label>
                        <input className="form-control" name="first_name" placeholder={employee.first_name}
                        {...register("first_name", { required: true })}
                        onChange={e => handleInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input  className="form-control" name="last_name" placeholder={employee.last_name}
                        {...register("last_name", { required: true })}
                        onChange={e => handleInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Email Id: </label>
                        <input className="form-control" name="email_id" placeholder={employee.email_id}
                        {...register("email_id", { required: true })}
                        onChange={e => handleInputChange(e)}/>
                    </div>
                    <Button variant="success" onSubmit={handleSubmit(onSubmit)} type='submit'>Update</Button>
                        &nbsp;&nbsp;&nbsp;
                    <Link to={"/employees"}><Button className="btn btn-danger" >Cancel</Button>
                    </Link>
                </form> 
                <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            </div>
        )
}
