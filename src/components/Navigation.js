import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import CreateEmployee from "./CreateEmployee";
import EmployeeList from "./EmployeeList";
import Home from "./Home";
import Footer from "./Footer";
import UpdateEmploye from "./UpdateEmployee";
import ViewEmployee from "./ViewEmployee";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import React, {useState} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navigation() {

    //const nativageTo = useNavigate();
    const[navigate, setNavigate] = useState(false);
    const Logout = () => {

        localStorage.removeItem('login');
        setNavigate(true);
    }
    if (navigate) {
        //nativageTo("/login")
    }
   
return (
    
    <Router>
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Employee Management System</Navbar.Brand>
                <div style={{padding:"10px", fontFamily:"inherit",fontSize:"20px"}}>
                <Nav className="mr-auto">
                    <Nav.Link className="btn btn-secondary" style={{color:"blanchedalmond"}} href="/">Home</Nav.Link>
                    <Nav.Link className="btn btn-info" style={{marginLeft:"40px", color:"blue"}} href="/employees">Employees</Nav.Link>
                </Nav>
                </div>
                <Link to={"/"} onClick={Logout} className="btn btn-outline-danger w-25" style={{marginLeft:"180px", color:"white"}}>Logout</Link>
            </Navbar>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
                <Route path={"/login"} element={<LogIn/>}/>
                <Route path={"/employees"} element={<EmployeeList/>}/>
                <Route path={"add-employees"} element={<CreateEmployee/>}/>
                <Route path={"employees/update-employees/:id"} element={<UpdateEmploye/>}/>
                <Route path={"employees/view-employees/:id"} element={<ViewEmployee/>}/>
                <Route path={"employees/delete-employees/:id"} element={<EmployeeList/>}/>
            </Routes>
            <Footer/>
        </div>
        <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </Router>
    
    );
}

export default Navigation;

            