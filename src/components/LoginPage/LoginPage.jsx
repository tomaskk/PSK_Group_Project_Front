import React, { Component } from 'react';
import SvgLogo from './LoginPageComponents/img/SvgLogo.jsx';
import SlackLogo from './LoginPageComponents/img/SlackLogo.jsx';
import Illustration from './LoginPageComponents/img/illustration.png';
import { ServerHostName } from '../../constants/UriConstants.js';
import { connect } from 'react-redux';
import {
  tryLogin,
  tryRegister
} from './LoginPageComponents/actions/ActionCreators';

class LoginPage extends Component {
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
    alert('Slack button clicked');
  };

  OnCheckBoxClick = () => {
    this.setState({ CheckBoxChecked: !this.state.CheckBoxChecked });
  };

  OnRegisterButtonClick = () => {
    tryRegister(
      this.emailInput.current.value.toString(),
      this.passwordInput.current.value.toString(),
      this.props.history,
      this.props.dispatch
    );
  };

  render() {
    return (
      <main className="main main__login">
        <div className="content content__login">
          <div className="section section--login">
            <div className="form__row form__login--heading">
              <SvgLogo />{' '}
            </div>
            <div className="form__row form__login--heading">
              <h1 className="heading1">Log in</h1>
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
                <a href={ServerHostName + '/forgot'}>Forgot password?</a>
              </div>

              <div className="form__row form__row--login">
                <button
                  className="button button--primary button--login button--wide"
                  onClick={this.OnLoginButtonClick}
                >
                  Login
                </button>
              </div>
              <div className="form__row form__row--login">
                <button
                  className="button button--primary button--slack button--wide"
                  onClick={this.OnSlackButtonClick}
                >
                  <SlackLogo className="logo" />
                  Login via Slack
                </button>
              </div>
              <div className="form__row form__row--login actions--sign-up">
                <button
                  className="button button--primary button--login button--wide"
                  onClick={this.OnRegisterButtonClick}
                >
                  Sing Up
                </button>
              </div>
            </form>
            <div className="error__hidden" id="error">
              Password or email address is incorrect.
            </div>
            <div className="sidebar__copyright sidebar__copyright--login">
              <p>Copyright &copy; 2019 Devbridge</p>
            </div>
          </div>
        </div>
        <div className="content content--stretch-login content--double">
          <div className="image__container">
            <img className="image" src={Illustration} alt="background" />
            <div className="edit edit--bottom-right">
              <a className="edit--text" href={ServerHostName}>
                Privacy policy
              </a>
              <span className="edit--text"> | </span>
              <a className="edit--text" href={ServerHostName}>
                Terms of use
              </a>
              <span className="edit--text"> | </span>
              <a className="edit--text" href={ServerHostName}>
                Help
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default connect()(LoginPage);
