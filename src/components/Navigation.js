import React from "react";

import {Navbar, Nav} from 'react-bootstrap';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import CreateEmployee from "./CreateEmployee";
import EmployeeList from "./EmployeeList";
import Home from "./Home";
import Footer from "./Footer";
import UpdateEmploye from "./UpdateEmployee";
import ViewEmployee from "./ViewEmployee";


function Navigation() {

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
                <Link to={"/"} className="btn btn-outline-danger w-25" style={{marginLeft:"180px", color:"white"}}>Logout</Link>
            </Navbar>
            <Routes>
                {/* <Route path="/" element={<Home/>}/> */}
                <Route path="/" element={<EmployeeList/>}/>
                <Route path={"add-employees"} element={<CreateEmployee/>}/>
                <Route path={"employees/update-employees/:id"} element={<UpdateEmploye/>}/>
                <Route path={"employees/view-employees/:id"} element={<ViewEmployee/>}/>
            </Routes>
            <Footer/>
        </div>
    </Router>
    );
}

export default Navigation;


        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/employees" element={<EmployeeList/>}/>
                    <Route path={"add-employees"} element={<CreateEmployee/>}/>
                    <Route path={"employees/update-employees/:id"} element={<UpdateEmploye/>}/>
                    <Route path={"employees/view-employees/:id"} element={<ViewEmployee/>}/>
                </Routes>
            </div>
        </Router>
            