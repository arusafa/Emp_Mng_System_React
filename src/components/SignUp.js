import React, {useState} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

export default function SignUp() {

  const navigate = useNavigate();
    
    const base_url = 'https://comp3123-assignment-2.herokuapp.com/api/user/signup';
    
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

      console.log("New User Added");
      axios.post(base_url, newUser)
          .then(res => console.log(res.data));
          navigate('/');
          navigate('/login');
  }
  return (
    <div>
        <div style={{marginTop:"20px", marginBottom:"20px"}} className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:"#ebe6e1"}}>
                <h3 className="text-center">SignUp</h3>
                <div className="card-body">
                    <form>
                        <div className="form-group d-block">
                            <label>Username: </label>
                            <input type='text' className="form-control" name="username" placeholder="Enter a username"
                            onChange={e => handleInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input type='password'  className="form-control" name="password" placeholder="Enter a password"
                            onChange={e => handleInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Email Id: </label>
                            <input type='email' className="form-control" name="email" placeholder="Enter an email address"
                            onChange={e => handleInputChange(e)}/>
                        </div>
                        <Button variant="success" onClick={e => onSubmit(e)}>Submit</Button>
                            &nbsp;&nbsp;&nbsp;Already have an account:    
                        <Link to={"/login"}><Button style={{marginRight:35}} className="btn btn-primary" >LogIn</Button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
}
