import React, { Component } from 'react'
import SelfProfileForm from './SelfProfileComponents/SelfProfileForm'
import NavigationTabs from './SelfProfileComponents/NavigationTabs'
import { FAKE_DATA } from './SelfProfileComponents/FakeData'
import Skills from './SelfProfileComponents/Skills'
import Goals from './SelfProfileComponents/Goals'

import { connect } from "react-redux";
import * as actions from "./actions/switchTabs";
import { bindActionCreators } from 'redux'

const specialistTabItems = FAKE_DATA.specialistTabItems
const learnTabItems = FAKE_DATA.learnTabItems

class SelfProfileMainScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: "",
      name: "",
      surname: "",
      email: "",
      city: "",
      masterAt: [{subject: "", stars: 0}],
      wantsToLearn: [],

      masterAtSubjects: [],
      masterAtStars: [],

      toLearnSubjects: [],
      toLearnComments: [],

      newSkillSubject: "",
      newSkillRating: 0,
      newGoalSubject: "",
      newGoalComment: "",
      sld: "2019.04.03",
      isEditModeDisabled: true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeArrays = this.handleChangeArrays.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleNavigation(newTab){
    this.props.changeTabInStore(newTab);
  }

  getUserDataFromReduxStore(){  // + reset local values
    let allSkills = this.props.selfProfileReducer.masterAt;
    let i = 0;
    let skillSubjects = [];
    let skillStars = [];
    allSkills.forEach(item => {
      skillSubjects[i] = item.subject;
      skillStars[i] = item.stars;
      i++;
    });

    let allGoals = this.props.selfProfileReducer.wantsToLearn;
    i = 0;
    let goalSubjects = [];
    let goalComments = [];
    allGoals.forEach(item => {
      goalSubjects[i] = item.subject;
      goalComments[i] = item.comment;
      i++;
    });

    this.setState({
      photo:    this.props.selfProfileReducer.photo,
      name:     this.props.selfProfileReducer.name,
      surname:  this.props.selfProfileReducer.surname,
      email:    this.props.selfProfileReducer.email,
      city:     this.props.selfProfileReducer.city,
      masterAt: this.props.selfProfileReducer.masterAt,
      wantsToLearn: this.props.selfProfileReducer.wantsToLearn,

      masterAtSubjects: skillSubjects,
      masterAtStars: skillStars,

      toLearnSubjects: goalSubjects,
      toLearnComments: goalComments,

      isEditModeDisabled: true,
      newSkillRating: 0, 
      newSkillSubject: "",
      newGoalSubject: "",
      newGoalComment: "",
    });
  }

  componentDidMount() {
    this.getUserDataFromReduxStore();
  }

  handleChangeArrays(event) {
    const { name, value, id } = event.target

    if(name === "masterAtSubjects"){
      let allSkillSubjects = this.state.masterAtSubjects;
      allSkillSubjects[id] = value;

      this.setState({ [name]: allSkillSubjects })
    }

    if(name === "masterAtStars"){
      let allSkillStars = this.state.masterAtStars;
      allSkillStars[id] = value;

      this.setState({ [name]: allSkillStars })
    }

    if(name === "toLearnSubjects"){
      let allGoalSubs = this.state.toLearnSubjects;
      allGoalSubs[id] = value;

      this.setState({ [name]: allGoalSubs })
    }

    if(name === "toLearnComments"){
      let allGoalComments = this.state.toLearnComments;
      allGoalComments[id] = value;

      this.setState({ [name]: allGoalComments })
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleButtonClick(event) {
    event.preventDefault();
    const { name } = event.target;
    const { id } = event.target;
    switch (name) {
      case "personal_info":
        this.handleNavigation("personal_info");

        this.state.currentTab !== "personal_info" && this.setState({
          isEditModeDisabled: true
        })
        break

      case "skills":
        this.handleNavigation("skills");

        this.state.currentTab !== "skills" && this.setState({
          isEditModeDisabled: true
        })
        break

      case "change_password": 
        this.handleNavigation("change_password");

        this.setState({
          isEditModeDisabled: true
        })
        break
    //--personal-info-tab
      case "personal_info_edit":
       this.handleNavigation("personal_info_edit");
       this.setState({
        isEditModeDisabled: false
        })
        break;
        
      case "save_personal_info":
        this.props.updatePhotoInStore(this.state.photo) 
        this.props.updateNameInStore(this.state.name);
        this.props.updateSurnameInStore(this.state.surname);
        this.props.updateEmailInStore(this.state.email);
        this.props.updateCityInStore(this.state.city);
 
        this.handleNavigation("personal_info");
        this.setState({ isEditModeDisabled: true })
        break 

      case "cancel_self_profile":
        this.setState({
          photo:    this.props.selfProfileReducer.photo,
          name:     this.props.selfProfileReducer.name,
          surname:  this.props.selfProfileReducer.surname,
          email:    this.props.selfProfileReducer.email,
          city:     this.props.selfProfileReducer.city,
          isEditModeDisabled: true
        });
        break

    //--skills-tab-top
      case "skills_enter_edit_mode":
      break

      case "cancel_skills_edit":
        this.handleNavigation("skills");
        this.setState({ isEditModeDisabled: true, newSkillRating: 0, newSkillSubject: "" })
        break

      case "save_skills_edit":
        this.handleNavigation("skills");
        this.setState({ isEditModeDisabled: true, newSkillRating: 0, newSkillSubject: "" })
        break

      case "delete_skill":
       let allSkills = this.props.selfProfileReducer.masterAt;
       let skillToDeleteID = parseInt(id);
       allSkills.splice(skillToDeleteID, 1);

       this.props.updateMasterAtInStore(allSkills);

       this.handleNavigation("skills")
       this.getUserDataFromReduxStore();
      break

      case "create_skill":
        if(this.state.newSkillRating != 0 && this.state.newSkillSubject !== "")
        {
           let allSkills = this.props.selfProfileReducer.masterAt;
           let newSkill = { subject: this.state.newSkillSubject, stars: parseInt(this.state.newSkillRating)};
           allSkills.push(newSkill);
           this.props.updateMasterAtInStore(allSkills);
        }
       this.getUserDataFromReduxStore();
      break

    //--skills-tab-bottom
      case "goals_enter_edit_mode":
      break

      case "cancel_goals_edit":
        this.getUserDataFromReduxStore();
        this.handleNavigation("skills");
        break

      case "save_goals_edit":
        var allSkills = this.state.masterAt;
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
        
        this.handleNavigation("skills");
        this.getUserDataFromReduxStore();
        break 

      case "create_goal":
        if(this.state.newGoalSubject !== "" && this.state.newGoalComment !== "")
        {
           var allSkills = this.props.selfProfileReducer.wantsToLearn;
           let newSkill = { subject: this.state.newGoalSubject, comment: this.state.newGoalComment};
           allSkills.push(newSkill);
           this.props.updateWantsToLearnInStore(allSkills);
        }
        this.getUserDataFromReduxStore();
      break

    case "delete_goal":
      var allGoals = this.props.selfProfileReducer.wantsToLearn;
      let goalToDeleteID = parseInt(id);
      allGoals.splice(goalToDeleteID, 1);

      this.props.updateWantsToLearnInStore(allGoals);

      this.handleNavigation("skills")
      this.getUserDataFromReduxStore();
     break

   //--other     
      default: 
        this.setState({ isEditModeDisabled: false })
    }
  }


  render() {
    const personalInfoTabComponents =
      <div>
        <div className="profile__section section">
          <SelfProfileForm handleChange={this.handleChange} dataShared={this.state} handleButtonClick={this.handleButtonClick}/>
        </div>
      </div>

    const SkillsTabComponents =
      <div>
        <div className="profile__section section profile__separator">
          <Skills learningData={specialistTabItems} dataShared={this.state} handleChange={this.handleChange} handleChangeArrays={this.handleChangeArrays} handleButtonClick={this.handleButtonClick} userInfo={this.props.selfProfileReducer} updateMasterat={this.props.updateMasterAtInStore}/>
        </div>

        <div className="profile__section section">
          <Goals learningData={learnTabItems} dataShared={this.state} handleChange={this.handleChange} handleChangeArrays={this.handleChangeArrays} handleButtonClick={this.handleButtonClick}  userInfo={this.props.selfProfileReducer}/>
        </div>
      </div>

      const ChangePWTabComponents =
      <div>
        <div className="profile__section section">
          <h2 className="heading2">Oops - 404</h2>
        </div>
      </div>

    return (
      <main className="main">
      <h1 className="heading1">My profile</h1>
        <div className="content content--stretch">
          <NavigationTabs dataShared={this.props.selfProfileReducer.currentTab} handleButtonClick={this.handleButtonClick} />
          <div className="profile content__scrollable">
            {this.props.selfProfileReducer.currentTab === "personal_info" && personalInfoTabComponents}
            {this.props.selfProfileReducer.currentTab === "skills" && SkillsTabComponents}
            {this.props.selfProfileReducer.currentTab === "change_password" && ChangePWTabComponents}
            {this.props.selfProfileReducer.currentTab === "Python" && ChangePWTabComponents}
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    selfProfileReducer: state.selfProfileReducer
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeTabInStore: (tab) => actions.switchTab(tab),
      updatePhotoInStore: (newString) => actions.updatePhoto(newString),
      updateNameInStore: (newString) => actions.updateName(newString),
      updateSurnameInStore: (newString) => actions.updateSurname(newString),
      updateEmailInStore: (newString) => actions.updateEmail(newString),
      updateCityInStore: (newString) => actions.updateCity(newString),
      updateMasterAtInStore: (newObj) => actions.updateMasterAt(newObj),
      updateWantsToLearnInStore: (newObj) => actions.updateWantsToLearn(newObj)
    },
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelfProfileMainScreen);