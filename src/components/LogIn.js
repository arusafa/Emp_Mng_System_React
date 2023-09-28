import React, {useState} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";

export default function LogIn() {

    const notifySuccess = () => toast("User Logged-In Successfully!")
    
    const notifyError = () => toast.warn('Please check again', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    
    const notifyErrorUsername = () => toast.error('Username cannot be empty', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;

        const notifyErrorPassword = () => toast.error('Password cannot be empty', {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });;
            
        const notifyErrorEmail = () => toast.error('Email cannot be empty', {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });;
    
        const notifyErrorEmailFormat = () => toast.error('Email format is incorrect', {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })

    const {register,handleSubmit} = useForm();

    const navigate = useNavigate();
    
    const base_url = 'https://comp3123-assignment2-backend.onrender.com/api/user/login';
    
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        user:[]
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setUser({...user, [name]: value})
    }

    const onSubmit = (e) => {
      e.preventDefault();
      
      const newUser = {
          username: user.username,
          password: user.password,
          email: user.email
      }
      if (newUser.username.length <= 0 || newUser.password.length <= 0 || newUser.email.length <= 0) {
        if (newUser.username.length <= 0) {
            notifyErrorUsername();
        }
        if (newUser.password.length <= 0) {
            notifyErrorPassword();
        }
        if (newUser.email.length <= 0) {
            notifyErrorEmail();
        }
    } else if (!newUser.email.includes('@')) {
        notifyErrorEmailFormat();
        } 
    else {
        axios.post(base_url, newUser)
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
            <div className="card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:"#dff0f0"}}>
                <h3 className="text-center">LogIn</h3>
                <div className="card-body">
                    <form onSubmit={e => handleSubmit(onSubmit(e))}>
                        <div className="form-group d-block">
                            <label>Username: </label>
                            <input type='text' className="form-control" name="username" placeholder="Enter a username"
                            {...register("username", { required: true })}
                            onChange={e => handleInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input type='password'  className="form-control" name="password" placeholder="Enter a password"
                            {...register("password", { required: true })}
                            onChange={e => handleInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Email Id: </label>
                            <input type='email' className="form-control" name="email" placeholder="Enter an email address"
                            {...register("email", { required: true })}
                            onChange={e => handleInputChange(e)}/>
                        </div>
                        <Button variant="primary" onSubmit={handleSubmit(onSubmit)} type='submit'>Submit</Button>
                            &nbsp;&nbsp;&nbsp;Don't you have an account:    
                        <Link to={"/signup"}><Button style={{marginRight:35}} className="btn btn-success" >SignUp</Button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
        <ToastContainer 
        position="bottom-center"
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
);
}
