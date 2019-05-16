import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from '../store/store.js';

import Sidebar from '../components/SidebarComp/SidebarComp.jsx';

import '../style/site-styles.scss';
import '../../public/index.html';
import TopHeader from '../components/TopHeader/TopHeader.jsx';
import SelfProfileMainScreen from '../components/SelfProfile/SelfProfileMainScreen.js';
import AllVoyagesList from '../components/Menu_Management/Keliones_Tab/VoyagesList.jsx';
import AllPeopleList from '../components/Menu_Management/Zmones_Tab/PeopleList.jsx';
import UserProfileMainScreen from '../components/UserProfile/UserProfileMainScreen.jsx';

import HelpPage from '../components/HelpPage/HelpPage.jsx';
import Favicon from 'react-favicon';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="content-container-div">
            <Sidebar />

            <div className="container">
              <TopHeader />
              <Route exact path="/" component={SelfProfileMainScreen} />

              <Route path="/host/manage/users" component={AllPeopleList} />
              <Route path="/host/manage/voyages" component={AllVoyagesList} />

              <Route path="/host/help" component={HelpPage} />
              <Route
                path="/host/user/:userId"
                component={UserProfileMainScreen}
              />

              <Favicon url={`${window.location.origin}/favicon.ico`} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
