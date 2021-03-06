/* eslint-disable no-case-declarations */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';

import SelfProfileForm from './SelfProfileComponents/SelfProfileForm';
import NavigationTabs from './SelfProfileComponents/NavigationTabs';
import { FAKE_DATA } from './SelfProfileComponents/FakeData';
import Skills from './SelfProfileComponents/Skills';
import Goals from './SelfProfileComponents/Goals';
import TravelList from './tabs/MyTravelsTab/TravelList';
import SvgHand from '../common/images/SvgHand.jsx';
import InvitationRow from './InvitationRow.jsx';

import * as actions from './actions/switchTabs';
import * as loadFromAPI from '../Menu_Management/Zmones_Tab/PeopleListComponents/actions/LDActions.js'

const { specialistTabItems, learnTabItems } = FAKE_DATA;

class SelfProfileMainScreen extends Component {
  constructor(props) {
    super(props);

    if(props.currentUser == 'empty'){
      props.history.push('/login');
    }

    this.state = {
      photo: '',
      name: '',
      surname: '',
      email: '',
      city: '',
      masterAt: [{ subject: '', stars: 0 }],
      wantsToLearn: [],

      masterAtSubjects: [],
      masterAtStars: [],

      toLearnSubjects: [],
      toLearnComments: [],

      newSkillSubject: '',
      newSkillRating: 0,
      newGoalSubject: '',
      newGoalComment: '',
      sld: '2019.04.03',
      isEditModeDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeArrays = this.handleChangeArrays.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    //turi this.props.history.push
  }

  handleNavigation(newTab) {
    this.props.changeTabInStore(newTab);
  }

  getUserDataFromReduxStore() {
    // + reset local values
    const allSkills = this.props.selfProfileReducer.masterAt;
    let i = 0;
    const skillSubjects = [];
    const skillStars = [];
    allSkills.forEach(item => {
      skillSubjects[i] = item.subject;
      skillStars[i] = item.stars;
      i++;
    });

    const allGoals = this.props.selfProfileReducer.wantsToLearn;
    i = 0;
    const goalSubjects = [];
    const goalComments = [];
    allGoals.forEach(item => {
      goalSubjects[i] = item.subject;
      goalComments[i] = item.comment;
      i++;
    });

    this.setState({
      photo: this.props.selfProfileReducer.photo,
      name: this.props.selfProfileReducer.name,
      surname: this.props.selfProfileReducer.surname,
      email: this.props.selfProfileReducer.email,
      city: this.props.selfProfileReducer.city,
      masterAt: this.props.selfProfileReducer.masterAt,
      wantsToLearn: this.props.selfProfileReducer.wantsToLearn,

      masterAtSubjects: skillSubjects,
      masterAtStars: skillStars,

      toLearnSubjects: goalSubjects,
      toLearnComments: goalComments,

      isEditModeDisabled: true,
      newSkillRating: 0,
      newSkillSubject: '',
      newGoalSubject: '',
      newGoalComment: '',
    });
  }

  componentDidMount() {
    this.loadDataFromAPI();
    this.getUserDataFromReduxStore();
    this.setCurrentUsersProfile();
  }

  handleChangeArrays(event) {
    const { name, value, id } = event.target;

    if (name === 'masterAtSubjects') {
      const allSkillSubjects = this.state.masterAtSubjects;
      allSkillSubjects[id] = value;

      this.setState({ [name]: allSkillSubjects });
    }

    if (name === 'masterAtStars') {
      const allSkillStars = this.state.masterAtStars;
      allSkillStars[id] = value;

      this.setState({ [name]: allSkillStars });
    }

    if (name === 'toLearnSubjects') {
      const allGoalSubs = this.state.toLearnSubjects;
      allGoalSubs[id] = value;

      this.setState({ [name]: allGoalSubs });
    }

    if (name === 'toLearnComments') {
      const allGoalComments = this.state.toLearnComments;
      allGoalComments[id] = value;

      this.setState({ [name]: allGoalComments });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleButtonClick(event) {
    event.preventDefault();
    const { name } = event.target;
    const { id } = event.target;
    switch (name) {
      case 'personal_info':
        this.handleNavigation('personal_info');

        this.state.currentTab !== 'personal_info' &&
          this.setState({
            isEditModeDisabled: true,
          });
        break;

      case 'skills':
        this.handleNavigation('skills');

        this.state.currentTab !== 'skills' &&
          this.setState({
            isEditModeDisabled: true,
          });
        break;

      case 'your_travels':
        this.handleNavigation('your_travels');

        this.setState({
          isEditModeDisabled: true,
        });
        break;
      // --personal-info-tab
      case 'personal_info_edit':
        this.handleNavigation('personal_info_edit');
        this.setState({
          isEditModeDisabled: false,
        });
        break;

      case 'save_personal_info':
        this.props.updatePhotoInStore(this.state.photo);
        this.props.updateNameInStore(this.state.name);
        this.props.updateSurnameInStore(this.state.surname);
        this.props.updateEmailInStore(this.state.email);
        this.props.updateCityInStore(this.state.city);

        this.handleNavigation('personal_info');
        this.setState({ isEditModeDisabled: true });
        break;

      case 'cancel_self_profile':
        this.setState({
          photo: this.props.selfProfileReducer.photo,
          name: this.props.selfProfileReducer.name,
          surname: this.props.selfProfileReducer.surname,
          email: this.props.selfProfileReducer.email,
          city: this.props.selfProfileReducer.city,
          isEditModeDisabled: true,
        });
        break;

      // --skills-tab-top
      case 'skills_enter_edit_mode':
        break;

      case 'cancel_skills_edit':
        this.handleNavigation('skills');
        this.setState({
          isEditModeDisabled: true,
          newSkillRating: 0,
          newSkillSubject: '',
        });
        break;

      case 'save_skills_edit':
        this.handleNavigation('skills');
        this.setState({
          isEditModeDisabled: true,
          newSkillRating: 0,
          newSkillSubject: '',
        });
        break;

      case 'delete_skill':
        let allSkills = this.props.selfProfileReducer.masterAt;
        const skillToDeleteID = parseInt(id);
        allSkills.splice(skillToDeleteID, 1);

        this.props.updateMasterAtInStore(allSkills);

        this.handleNavigation('skills');
        this.getUserDataFromReduxStore();
        break;

      case 'create_skill':
        if (
          this.state.newSkillRating != 0 &&
          this.state.newSkillSubject !== ''
        ) {
          const allSkills = this.props.selfProfileReducer.masterAt;
          const newSkill = {
            subject: this.state.newSkillSubject,
            stars: parseInt(this.state.newSkillRating),
          };
          allSkills.push(newSkill);
          this.props.updateMasterAtInStore(allSkills);
        }
        this.getUserDataFromReduxStore();
        break;

      // --skills-tab-bottom
      case 'goals_enter_edit_mode':
        break;

      case 'cancel_goals_edit':
        this.getUserDataFromReduxStore();
        this.handleNavigation('skills');
        break;

      case 'save_goals_edit':
        allSkills = this.state.masterAt;
        let i = 0;

        allSkills.forEach(item => {
          item.subject = this.state.masterAtSubjects[i];
          item.stars = parseInt(this.state.masterAtStars[i]);
          i++;
        });

        var allGoals = this.state.wantsToLearn;
        i = 0;
        allGoals.forEach(item => {
          item.subject = this.state.toLearnSubjects[i];
          item.comment = this.state.toLearnComments[i];
          i++;
        });

        this.props.updateMasterAtInStore(allSkills);
        this.props.updateWantsToLearnInStore(allGoals);

        this.handleNavigation('skills');
        this.getUserDataFromReduxStore();
        break;

      case 'create_goal':
        if (
          this.state.newGoalSubject !== '' &&
          this.state.newGoalComment !== ''
        ) {
          allSkills = this.props.selfProfileReducer.wantsToLearn;
          const newSkill = {
            subject: this.state.newGoalSubject,
            comment: this.state.newGoalComment,
          };
          allSkills.push(newSkill);
          this.props.updateWantsToLearnInStore(allSkills);
        }
        this.getUserDataFromReduxStore();
        break;

      case 'delete_goal':
        var allGoals = this.props.selfProfileReducer.wantsToLearn;
        const goalToDeleteID = parseInt(id);
        allGoals.splice(goalToDeleteID, 1);

        this.props.updateWantsToLearnInStore(allGoals);

        this.handleNavigation('skills');
        this.getUserDataFromReduxStore();
        break;

      // --other
      default:
        this.setState({ isEditModeDisabled: false });
    }
  }

  loadDataFromAPI() {
    this.props.loadUsers();
    this.props.loadEmployeeTravel();
  }

  setCurrentUsersProfile() {
    let currUser = this.props.users.filter(user => {
        if(user.userName == this.props.currentUser)
            return user;
    });

    if(currUser[0] !== undefined)
    {
      this.setState({
        name: currUser[0].firstName,
        surname: currUser[0].lastName,
        email: currUser[0].email,
        photo: currUser[0].profilePhoto,
      });

      this.props.updateNameInStore(currUser[0].firstName);
      this.props.updateSurnameInStore(currUser[0].lastName);
      this.props.updateEmailInStore(currUser[0].email);
      this.props.updatePhotoInStore(currUser[0].profilePhoto);
    }
  }
  
  getUpcomingTravelsDTO = () => {

    let DTO = this.props.employeeTravel.filter( item => {
      //-- for each travel
      let thisUserIncluded = false;
      //-- check each record if user is travelling
        if( item.employee.userName === this.props.currentUser){
          thisUserIncluded = true;
        }

      let item_date = new Date(Date.parse(item.travel.startTime));
      return (Date.now() <= item_date && thisUserIncluded && !item.confirm);
    });
    
    return DTO;
  }

  render() {

    const personalInfoTabComponents = (
      <div>
        <div className="profile__section section">
          <SelfProfileForm
            handleChange={this.handleChange}
            dataShared={this.state}
            handleButtonClick={this.handleButtonClick}
          />
        </div>
      </div>
    );

    const SkillsTabComponents = (
      <div>
        <div className="content content--stretch" style={{ margin: "20px" }}>
          <h5> You've been invited to participate in these trips: </h5>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Start time</th>
                <th>End time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.getUpcomingTravelsDTO().map((item, index) => 
                <InvitationRow item = {item} currentUser= {this.props.currentUser} />
                 )}
            </tbody>
          </Table>
        </div>
      </div>
    );

    const MyTravelsTabComponent = <TravelList />;

    return (
      <main className="main">
        <h1 className="heading1">My profile { this.props.currentUser === 'empty' ? '[Offline]' : '(' + this.props.currentUser + ')' } </h1>
        <div className="content content--stretch">
          <NavigationTabs
            dataShared={this.props.selfProfileReducer.currentTab}
            handleButtonClick={this.handleButtonClick}
          />
          <div className="profile content__scrollable">
            {this.props.selfProfileReducer.currentTab === 'personal_info' &&
              personalInfoTabComponents}
            {this.props.selfProfileReducer.currentTab === 'skills' &&
              SkillsTabComponents}
            {this.props.selfProfileReducer.currentTab === 'your_travels' &&
              MyTravelsTabComponent}
            {this.props.selfProfileReducer.currentTab === 'Python' &&
              MyTravelsTabComponent}
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    selfProfileReducer: state.selfProfileReducer,
    employeeTravel: state.LDReducer.employeeTravels,
    users: state.LDReducer.filteredUsers,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeTabInStore: tab => actions.switchTab(tab),
      updatePhotoInStore: newString => actions.updatePhoto(newString),
      updateNameInStore: newString => actions.updateName(newString),
      updateSurnameInStore: newString => actions.updateSurname(newString),
      updateEmailInStore: newString => actions.updateEmail(newString),
      updateCityInStore: newString => actions.updateCity(newString),
      updateMasterAtInStore: newObj => actions.updateMasterAt(newObj),
      updateWantsToLearnInStore: newObj => actions.updateWantsToLearn(newObj),

      loadUsers: () => loadFromAPI.loadUsersFromAPI(),
      loadEmployeeTravel: () => loadFromAPI.loadEmployeeTravelFromAPI(),
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelfProfileMainScreen);
