import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

import "./LoginSignup.css";

class LoginSignup extends Component {
    render() {
      return (
        <Router basename="/">
          <div className="loginsignup">
            <div className="loginsignupside" />
            <div className="loginsignupform">
  
              <div className="loginsignupformtitle">
                <NavLink
                  to="/login"
                  activeClassName="loginsignupformtitle-active"
                  className="loginsignupformtitle log"
                >
                  ورود 
                </NavLink>{" "}
                {" "}
                <NavLink
                  exact
                  to="/"
                  activeClassName="loginsignupformtitle-active"
                  className="loginsignupformtitle sign"
                >
                  ثبت‌نام 
                </NavLink>
              </div>
  
              <Route exact path="/" component={Signup} />
              <Route path="/Login" component={Login} />
            </div>
          </div>
        </Router>
      );
    }
  }
  
  export default LoginSignup;