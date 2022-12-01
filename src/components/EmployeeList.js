import {React, Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import API from './API';
import EmployeeDetails from './EmployeeDetails';
import {Button, Table } from "react-bootstrap";

export default class EmployeeList extends Component {
    
    constructor(props) {
        super(props);
        this.API = new API();

        this.state = {
            employees: []
        }
        }

        componentDidMount (){
            this.API.getEmployees().then((response) => {
                this.setState({employees: response.data});
                //console.log(response);
                console.log(response.data);
            });
        }

        // Get Employee Data by ID
        getEmployeeDataByID = (id) => {
            axios.get(`http://localhost:8000/api/emp/employees/${id}`)
            .then(res =>{
                //console.log(res);
                console.log(res.data)
            })
        }

            //Delete Employee Data By ID
        deleteEmployeeDataByID = (id) => {
            axios.delete(`http://localhost:8000/api/emp/employees/${id}`)
            .then(res =>  { 
                console.log(res.data+" The " +id + " has been deleted");
                let emp = this.state.employees.filter(employees => {
                    return employees.id !== id
                })

                this.setState({...this.state, employees: emp})
                
                window.location="/";
                window.location.reload();
            })
        }
        
        render() {
            return (
                    <div>
                        <h1 className='text-center' style={{fontFamily:"monospace", marginTop:"15px",marginBottom:"10px"}}>Employee List</h1>
                        <div className="container">
                            <div style={{marginTop:"20px", marginBottom:"20px"}} className="row">
                                <div className="card col-md-3" style={{backgroundColor:"aliceblue", padding:"8px", marginBottom:"20px"}} >
                                    <Link to={"/add-employees"} className="btn btn-light" style={{color:"blue",fontSize:"18px"}}>Add Employee</Link>
                                </div>
                                <div>
                                    <Table striped border={true.toString()} hover>
                                        <thead className="bg-opacity-25 bg-danger">
                                            <tr style={{fontSize:"22px", textAlign:"center"}}>
                                                <th className="big-info" scope="col">#Employee ID</th>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Email Id</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    {
                                        this.state.employees.map((emp) => (
                                        <tr key={emp.id} style={{textAlign:"center", fontSize:"20px", fontFamily:"sans-serif"}}>
                                            <EmployeeDetails emp={emp} />
                                        
                                            <td style={{padding:"8px",}}>

                                            <Link style={{marginRight:"8px"}} to={`update-employees/${emp._id}`}>
                                                <Button onClick={(e) => this.getEmployeeDataByID(emp._id)} className="btn btn-success">Update</Button>
                                            </Link>

                                            <Link style={{marginRight:"8px"}} to={`update-employees/${emp._id}`}>
                                                <Button onClick={(e) => this.deleteEmployeeDataByID(emp._id)} className="btn-danger">Delete</Button>
                                            </Link>

                                            <Link to={`view-employees/${emp._id}`}>
                                                <Button className="btn-primary">View</Button>
                                            </Link>
                                            
                                            </td>

                                        </tr>
                                    ))
                                    } 
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>

            )
        }
    }

