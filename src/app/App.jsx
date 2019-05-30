import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from '../store/store.js';

import Sidebar from '../components/SidebarComp/SidebarComp.jsx';

import '../style/site-styles.scss';
import '../../public/index.html';
import TopHeader from '../components/TopHeader/TopHeader.jsx';
import SelfProfileMainScreen from '../components/SelfProfile/SelfProfileMainScreen.js';
import AllVoyagesList from '../components/Menu_Management/Keliones_Tab/VoyagesList.jsx';
import AllPeopleList from '../components/Menu_Management/Zmones_Tab/PeopleList.jsx';
import UserProfileMainScreen from '../components/SkillsTab/UserProfileMainScreen.jsx';
import LoginPage from '../components/LoginPage/LoginPage.jsx';
import registerPage from '../components/RegisterPage/RegisterPage.jsx';

import HelpPage from '../components/HelpPage/HelpPage.jsx';
import Favicon from 'react-favicon';
import 'react-bootstrap/dist/react-bootstrap.min.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      currentUser: 'empty'
    };
    
    this.handleFakeSignIn = this.handleFakeSignIn.bind(this);
  }

  handleFakeSignIn(param)  {
    this.setState({
      currentUser: param
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>

          <Route path="/login" render={(props) => <LoginPage {...props} setCurrentUser={ this.handleFakeSignIn } />} />

          <Route path="/register" component={registerPage} />

          <Route exact path="/" render={(props) => <div className="content-container-div"><Sidebar /><div className="containerr"><TopHeader /> <SelfProfileMainScreen {...props} currentUser={ this.state.currentUser } /></div></div> } />
          
          <Route path="/host/manage/users" render={(props) => <div className="content-container-div"><Sidebar /><div className="containerr"><TopHeader /> <AllPeopleList {...props} currentUser={ this.state.currentUser } /></div></div> } />

          <Route path="/host/manage/voyages" render={ () => {
                return ( <div className="content-container-div"><Sidebar /><div className="containerr"><TopHeader /> <AllVoyagesList currentUser={ this.state.currentUser }/></div></div> )
          }} />

          <Route path="/host/help" render={(props) => <div className="content-container-div"><Sidebar /><div className="containerr"><TopHeader /> <HelpPage {...props} currentUser={ this.state.currentUser } /></div></div> } />

          <Route path="/host/user/:userId" render={ () => {
                return ( <div className="content-container-div"><Sidebar /><div className="containerr"><TopHeader /> <UserProfileMainScreen /></div></div> )
          }} />

        </Router>
      </Provider>
    );
  }
}

export default App;
