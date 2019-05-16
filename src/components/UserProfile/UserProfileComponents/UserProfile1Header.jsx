import React, { Component } from 'react';
import SlackLogo from '../UserProfileImages/UserProfileHeaderImages/SlackLogo.jsx';

export default class UserProfile1Header extends Component {
  handleEmailClick = email => {
    const el = document.createElement('textarea');
    el.value = email;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  openConversation = () => {
    const queryParamChannel = 'channel';
    const queryParamTeam = 'team';
    const queryParamId = 'id';
    const urlBaseNative = new URL('slack://user?');
    const urlBaseWeb = new URL('https://slack.com/app_redirect?');
    const timeoutValue = 3000;
    const wName = 'window_1';

    // constants; to be replaced with parameters in refactored version
    const userID = 'UD0G9NH37';
    const teamID = 'TD1MK9F6J';

    // quering native Slack app
    var paramsNative = new URLSearchParams();
    paramsNative.append(queryParamTeam, teamID);
    paramsNative.append(queryParamId, userID);
    window.open(urlBaseNative + paramsNative, wName);

    // quering web URL
    // to handle the case where there is no native Slack app installed
    var paramsUrl = new URLSearchParams();
    paramsUrl.append(queryParamChannel, userID);
    setTimeout(function() {
      window.open(urlBaseWeb + paramsUrl, wName);
    }, timeoutValue);
  };

  render() {
    return (
      <div>
        <div className="about">
          <img
            src={this.props.pictureLocation}
            className="photo about__photo"
            alt="profile-pic"
          />
          <div>
            <h2 className="heading2 heading2--large">
              {this.props.firstName} {this.props.lastName}
            </h2>
            <p className="title">{this.props.position}</p>
            <div className="about__contact">
              <button
                onClick={() => this.handleEmailClick(this.props.email)}
                type="button"
                className="button button--primary button--contact"
              >
                Email
              </button>
              {/* <input type="hidden" value={this.props.email} id="email" /> */}
              <button
                onClick={() => this.openConversation()}
                type="button"
                className="button button--primary button--slack"
              >
                <SlackLogo />
                {this.props.slackButtonName}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
