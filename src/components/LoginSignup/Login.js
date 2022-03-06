import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("اطلاعات زیر با موفقیت ثبت شد:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="login">
        <form className="loginfields" onSubmit={this.handleSubmit}>
          <div className="loginfield">
            <fieldset className="loginfieldset">
            <legend className="loginlegend" htmlFor="email">
              رایانامه
            </legend>
            <input
              type="email"
              id="email"
              className="loginfieldinput"
              placeholder="اینجا وارد کنید..."
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            </fieldset>
          </div>

          <div className="loginfield">
            <fieldset className="loginfieldset">
            <legend className="loginlegend" htmlFor="password">
              رمزعبور
            </legend>
            <input
              type="password"
              id="password"
              className="loginfieldinput"
              placeholder="اینجا وارد کنید..."
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            </fieldset>
          </div>

          <div className="loginfield">
            <button className="custom-btn btn"><span>ورود</span></button>{" "}
          </div>

          <div className="loginfield">
            <fieldset className="rememberfieldset">
            <legend>
              <a href="null" className="loginlink">
                من را به خاطر بسپار 
              </a>
              </legend>
              <input
                className="logincheckboxinput"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />
            </fieldset>
          </div>

        </form>
      </div>
    );
  }
}

export default Login;