import React, { Component } from "react";
import SvgLogo from "./LoginPageComponents/img/SvgLogo.jsx";
import SlackLogo from "./LoginPageComponents/img/SlackLogo.jsx";
import Illustration from "./LoginPageComponents/img/illustration.png";
const ServerHostName = 'http://localhost:8080';
import { connect } from "react-redux";
import {
    tryLogin,
    tryRegister,
} from "./LoginPageComponents/actions/actionCreators";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.state = {
      CheckBoxChecked: false
    };
  }

  OnFormSubmit = e => {
    e.preventDefault();
  };

  OnLoginButtonClick = () => {
    tryLogin(
      this.emailInput.current.value.toString(),
      this.passwordInput.current.value.toString(),
      this.state.CheckBoxChecked.toString(),
      this.props.history,
      this.props.dispatch
    );
  };

  OnSlackButtonClick = () => {
    alert("Slack button clicked");
  };

  OnCheckBoxClick = () => {
    this.setState({ CheckBoxChecked: !this.state.CheckBoxChecked });
  };

  OnRegisterButtonClick = () => {
    this.props.history.push("/login");

    tryRegister(
      this.emailInput.current.value.toString(),
      this.passwordInput.current.value.toString(),
      this.props.history,
      this.props.dispatch
    );
  };

  render() {
    return (
      <main className="main main__login" style={{ display: "inline" }}>
        <div className="content content__login" style={{float: "left" }} >
          <div className="section section--login">
            <div className="form__row form__login--heading">
              <SvgLogo />{" "}
            </div>
            <div className="form__row form__login--heading">
              <h1 className="heading1">Sign up</h1> 
            </div>
            <form className="form" onSubmit={this.OnFormSubmit} method="post">
              <div className="form__row form__row--login">
                <div className="form__field form__field--wide">
                  <label className="form__label" htmlFor="email-in">
                    Email address
                  </label>
                  <input
                    id="email-in"
                    className="form__input"
                    type="email"
                    placeholder="Enter your email address"
                    ref={this.emailInput}
                  />
                </div>
              </div>

              <div className="form__row form__row--login">
                <div className="form__field form__field--wide">
                  <label className="form__label" htmlFor="password-in">
                    Password
                  </label>
                  <input
                    id="password-in"
                    className="form__input "
                    type="password"
                    placeholder="Enter password"
                    ref={this.passwordInput}
                  />
                </div>
              </div>

              <div className="form__row form__row--login">
                <div className="form__field--with-controls">
                  <input
                    type="checkbox"
                    className="form__input--checkbox"
                    onClick={this.OnCheckBoxClick}
                  />
                  <label className="form__label" htmlFor="">
                    Remember me
                  </label>
                </div>
                <a href={ServerHostName + "/forgot"}>Forgot password?</a>
              </div>

              <div className="form__row form__row--login">
                <button
                  className="button button--primary button--login button--wide"
                  onClick={this.OnLoginButtonClick}
                  style={{width: "100%"}}
                >
                  Login
                </button>
              </div>
              <div className="form__row form__row--login">
                <button
                  className="button button--primary button--slack button--wide"
                  onClick={this.OnSlackButtonClick}
                  style={{width: "100%"}}
                >
                  <SlackLogo className="logo" />
                  Login via Slack
                </button>
              </div>
              <div className="form__row form__row--login actions--sign-up">
                <button
                  className="button button--primary button--login button--wide"
                  onClick={this.OnRegisterButtonClick}
                  style={{width: "100%"}}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="error__hidden" id="error">

            </div>

            <div className="sidebar__copyrightt sidebar__copyrightt--login">
              <p>Copyright &copy; 2019 PEEKT</p>
            </div>
          </div>
        </div>
        

        <div className="content content--stretch-login content--double" >
          <div className="image__container">
          <img className="image" src={Illustration} alt="background" />
            <div className="edit edit--bottom-right">
              <a className="edit--text" href={ServerHostName + '/#/login'}>
                Privacy policy
              </a>
              <span className="edit--text"> | </span>
              <a className="edit--text" href={ServerHostName + '/#/login'}>
                Terms of use
              </a>
              <span className="edit--text"> | </span>
              <a className="edit--text" href={ServerHostName + '/#/login'}>
                Help
              </a>
            </div>
          </div>
        </div>
        

      </main>
    );
  }
}

export default connect()(RegisterPage);
