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
      currentTab: 'tab1',
      selectedUser: null,
    };
  }

  getCurrentUser = () => {

    let userId = parseInt(window.location.href.substring(34));

    let DTO = this.props.users.filter( item => {
      return (parseInt(item.id) == parseInt(userId));
    });
  
    return DTO[0];
  }

  changeState = () => {
    this.setState({
      currentTab:
        this.state.currentTab === 'tab1' ? 'tab2' : 'tab1'
    });
  };

  render() {
    return (
      <main className="main">
        <div className="content content--stretch">
          <UserProfile1Header
            pictureLocation={ this.getCurrentUser().profilePhoto == null ? 'https://www.w3schools.com/howto/img_avatar.png'
                            : this.getCurrentUser().profilePhoto == 'string' ? 'https://www.w3schools.com/howto/img_avatar2.png' 
                            : this.getCurrentUser().profilePhoto }
            firstName={this.getCurrentUser().firstName}
            lastName={this.getCurrentUser().lastName}
            position={this.getCurrentUser().email}
            email={this.getCurrentUser().email}
            slackButtonName="Slack"
          />

          <UserProfile2Nav
            link1Name="My upcoming plans"
            link2Name="Wants to learn"
            currentState={this.state.currentTab}
            stateChanger={this.changeState}
            userid={this.getCurrentUser().id}
          />

          <UserProfile3Footer
            className="profile__section section content__scrollable"
            currentState={this.state.currentTab}
            specialistTabItems={this.props.specialistTabItems}
            learnTabItems={this.props.learnTabItems}

            travelsList={this.props.travelsList}
            employeesList={this.props.employeeTravel}
            name={this.getCurrentUser().firstName}
            surname={this.getCurrentUser().lastName}
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
    learnTabItems: state.userProfileReducer.learnTabItems,

    users: state.LDReducer.filteredUsers,
    employeeTravel: state.LDReducer.employeeTravels,
    travelsList: state.LDReducer.travelsList,
  };
}

export default connect(mapStateToProps)(UserProfileMainScreen);
