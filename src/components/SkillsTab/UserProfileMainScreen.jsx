import React, { Component } from 'react';
import UserProfile1Header from './UserProfileComponents/UserProfile1Header.jsx';
import UserProfile2Nav from './UserProfileComponents/UserProfile2Nav.jsx';
import UserProfile3Footer from './UserProfileComponents/UserProfile3Footer.jsx';
import { store } from '../../store/store.js';
import { connect } from 'react-redux';

class UserProfileMainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'Specialist'
    };
  }

  changeState = () => {
    this.setState({
      currentTab:
        this.state.currentTab === 'Specialist' ? 'Learn' : 'Specialist'
    });
  };

  render() {
    return (
      <main className="main">
        <div className="content content--stretch">
          <UserProfile1Header
            pictureLocation="https://via.placeholder.com/96x96"
            firstName={this.props.userInfo.name}
            lastName={this.props.userInfo.surname}
            position="Senior Software Engineer"
            email={this.props.userInfo.email}
            slackButtonName="Slack"
          />

          <UserProfile2Nav
            link1Name="Specialist at"
            link2Name="Wants to learn"
            currentState={this.state.currentTab}
            stateChanger={this.changeState}
          />

          <UserProfile3Footer
            className="profile__section section content__scrollable"
            currentState={this.state.currentTab}
            specialistTabItems={this.props.specialistTabItems}
            learnTabItems={this.props.learnTabItems}
          />
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userProfileReducer.userInfo,
    specialistTabItems: state.userProfileReducer.specialistTabItems,
    learnTabItems: state.userProfileReducer.learnTabItems
  };
}

export default connect(mapStateToProps)(UserProfileMainScreen);
