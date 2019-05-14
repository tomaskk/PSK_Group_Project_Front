import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from "../components/SidebarComp/SidebarComp.jsx";

import "../style/site-styles.scss";
import "../../public/index.html";
import TopHeader from "../components/TopHeader/TopHeader.jsx";
import SelfProfileMainScreen from "../components/SelfProfile/SelfProfileMainScreen.js";
import AdminPeopleTakenLD from "../components/Keliones_Tab/AdminPeopleTakenLD.jsx";
import AdminPeopleWhoLeft from "../components/Zmones_Tab/AdminPeopleWhoLeft.jsx";
import UserProfileMainScreen from "../components/UserProfile/UserProfileMainScreen.jsx";
import "../style/site-styles.scss";
import "../../public/index.html";
import HelpPage from "../components/HelpPage/HelpPage.jsx";
import Favicon from "react-favicon";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="content-container-div">
            <Sidebar />

            <div class="container">
              <TopHeader />
              <Route exact path="/" component={SelfProfileMainScreen} />
             
              <Route path="/host/manage/users" component={AdminPeopleTakenLD} />
              <Route path="/host/manage/voyages" component={AdminPeopleWhoLeft} />
              <Route path="/host/help" component={HelpPage} />
              <Route path="/host/user/:userId" component={UserProfileMainScreen} />

              <Favicon url={window.location.origin + "/favicon.ico"} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
