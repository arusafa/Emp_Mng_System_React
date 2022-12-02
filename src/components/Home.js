import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container text-danger">
        <h2>Comp3123</h2><br/>
        <h2>Full Stack I</h2>
        <h2>Welcome to React-Js App</h2>
        <Link to={"/signUp"} className="btn btn-outline-success w-25" style={{marginLeft:"10px",marginBottom:"20px"}}>Sign-Up</Link>
        <Link to={"/signIn"} className="btn btn-outline-primary w-25" style={{marginLeft:"20px",marginBottom:"20px"}}>Sign-In</Link>
      </div>
    );
  }
}