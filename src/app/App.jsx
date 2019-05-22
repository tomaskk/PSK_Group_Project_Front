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
import UserProfileMainScreen from '../components/UserProfile/UserProfileMainScreen.jsx';
import loginPage from '../components/LoginPage/LoginPage.jsx';
import registerPage from '../components/RegisterPage/RegisterPage.jsx';

import HelpPage from '../components/HelpPage/HelpPage.jsx';
import Favicon from 'react-favicon';
import 'react-bootstrap/dist/react-bootstrap.min.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>

          <Route path="/login" component={loginPage} />

          <Route path="/register" component={registerPage} />

          <Route exact path="/" render={ () => {
                return ( <div className="content-container-div"><Sidebar /><div className="containerr"><TopHeader /> <SelfProfileMainScreen/></div></div> )
          }} />

          <Route path="/host/manage/users" render={ () => {
                return ( <div className="content-container-div"><Sidebar /><div className="containerr"><TopHeader /> <AllPeopleList/></div></div> )
          }} />

          <Route path="/host/manage/voyages" render={ () => {
                return ( <div className="content-container-div"><Sidebar /><div className="containerr"><TopHeader /> <AllVoyagesList/></div></div> )
          }} />

          <Route path="/host/help" render={ () => {
                return ( <div className="content-container-div"><Sidebar /><div className="containerr"><TopHeader /> <HelpPage/></div></div> )
          }} />

          <Route path="/host/user/:userId" render={ () => {
                return ( <div className="content-container-div"><Sidebar /><div className="containerr"><TopHeader /> <UserProfileMainScreen/></div></div> )
          }} />

        </Router>
      </Provider>
    );
  }
}

export default App;
