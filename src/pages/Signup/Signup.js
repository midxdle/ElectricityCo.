import React, { Component } from "react";
import "./Signup.css";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("اطلاعات زیر با موفقیت ثبت شد:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="signupmain">
        <div className="signupside" />
        <div className="signupform">
          <div className="signup">
            <form onSubmit={this.handleSubmit} className="signupfields">
              <div className="signupfield">
                <fieldset className="signfieldset">
                  <legend className="signuplegend" htmlFor="name">
                    نام‌کاربری
                  </legend>
                  <input
                    type="text"
                    id="name"
                    className="signupfieldinput"
                    placeholder="اینجا وارد کنید..."
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </fieldset>
              </div>

              <div className="signupfield">
                <fieldset className="signfieldset">
                  <legend className="signuplegend" htmlFor="email">
                    رایانامه
                  </legend>
                  <input
                    type="email"
                    id="email"
                    className="signupfieldinput"
                    placeholder="اینجا وارد کنید..."
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </fieldset>
              </div>

              <div className="signupfield">
                <fieldset className="signfieldset">
                  <legend className="signuplegend" htmlFor="password">
                    رمزعبور
                  </legend>
                  <input
                    type="password"
                    id="password"
                    className="signupfieldinput"
                    placeholder="اینجا وارد کنید..."
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </fieldset>
              </div>

              <div className="signupfield">
                <label className="signupcheckbox">
                  <a href="rules" className="signuplink">
                    قوانین و مقررات را مطالعه کرده و می پذیرم.
                  </a>
                  <label className="signupswitch">
                    <input className="signupinput" type="checkbox"></input>
                    <span className="signupslider"></span>
                  </label>
                </label>
              </div>

              <div className="signupfield">
                <button className="signupcustom-btn signupbtn">
                  <span>ثبت‌نام</span>
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
