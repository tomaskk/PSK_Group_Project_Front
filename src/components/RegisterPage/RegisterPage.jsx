import React, { Component } from "react";
import SvgLogo from "./LoginPageComponents/img/SvgLogo.jsx";
import SlackLogo from "./LoginPageComponents/img/SlackLogo.jsx";
import Illustration from "./LoginPageComponents/img/illustration.png";
const ServerHostName = 'http://localhost:5001';
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
    this.passwordInput2 = React.createRef();
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.state = {
      CheckBoxChecked: false
    };
  }

  OnFormSubmit = e => {
    e.preventDefault();
  };

  OnCreateAccButtonClick = () => {
    /*alert("Create my acc: \n" + this.emailInput.current.value + 
                         "\n" + this.passwordInput.current.value + 
                         "\n" + this.passwordInput2.current.value +
                         "\n" + this.nameInput.current.value +
                         "\n" + this.surnameInput.current.value);*/
                         
    tryRegister(
      this.emailInput.current.value.toString(),
      this.passwordInput.current.value.toString(),
      this.passwordInput2.current.value.toString(),
      this.nameInput.current.value.toString(),
      this.surnameInput.current.value.toString(),
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
  };

  render() {
    return (
      <main className="main main__login" style={{ display: "inline" }}>
        <div className="content content--stretch-login content--double" style={{float: "left", height: "100%" }} >
          <div className="section section--login" >
            <div className="form__row form__login--heading">
              <SvgLogo />{" "}
            </div>
            <div className="form__row form__login--heading">
              <h1 className="heading1">Travel Agent - Sign up</h1> 
            </div>
            <form className="form" onSubmit={this.OnFormSubmit} method="post" >

            <div className="form__row form__row--login">
                <div className="form__field form__field--wide">
                  <label className="form__label" htmlFor="name-in">
                    First name
                  </label>
                  <input
                    id="name-in"
                    className="form__input"
                    type="name"
                    placeholder="Enter your name"
                    ref={this.nameInput}
                  />
                </div>
              </div>

              <div className="form__row form__row--login">
                <div className="form__field form__field--wide">
                  <label className="form__label" htmlFor="surname-in">
                    Last name
                  </label>
                  <input
                    id="surname-in"
                    className="form__input"
                    type="surname"
                    placeholder="Enter your surname"
                    ref={this.surnameInput}
                  />
                </div>
              </div>

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
                <div className="form__field form__field--wide">
                  <label className="form__label" htmlFor="password-in2">
                    Confirm password
                  </label>
                  <input
                    id="password-in2"
                    className="form__input "
                    type="password"
                    placeholder="Repeat password"
                    ref={this.passwordInput2}
                  />
                </div>
              </div>

              <div className="form__row form__row--login">
                <button
                  className="button button--primary button--login button--wide"
                  onClick={this.OnCreateAccButtonClick}
                  style={{width: "100%"}}
                >
                  Create my account
                </button>
              </div>

              <div className="form__row form__row--login actions--sign-up">
                <button
                  className="button button--primary button--login button--wide"
                  onClick={this.OnRegisterButtonClick}
                  style={{width: "100%"}}
                >
                  Open Log in Form
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
          <img className="image" src={Illustration} alt="background" style={{width: "100%", height: "100%"}}/>
            <div className="edit edit--bottom-right">
              <a className="edit--text" href={ServerHostName + '/#/register'}>
                Privacy policy
              </a>
              <span className="edit--text"> | </span>
              <a className="edit--text" href={ServerHostName + '/#/register'}>
                Terms of use
              </a>
              <span className="edit--text"> | </span>
              <a className="edit--text" href={ServerHostName + '/#/register'}>
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
