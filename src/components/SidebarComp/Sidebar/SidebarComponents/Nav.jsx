import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import SvgHelp from "./images/SvgHelp.jsx";
import SvgHelpActive from "./images/SvgHelpActive.jsx";
import SvgProfile from "./images/SvgProfile.jsx";
import SvgProfileActive from "./images/SvgProfileActive.jsx";
import SvgList from "./images/SvgList.jsx";
import SvgListActive from "./images/SvgListActive.jsx";
import SvgAdmin from "./images/SvgAdmin.jsx";

const SEARCH_ROUTES = ["search", "user"];

class Nav extends Component {
  isSearchNavigationActive = () => {
    var currentPathName = this.props.location.pathname;
    return currentPathName.search(SEARCH_ROUTES.join("|")) !== -1;
  };

  isNavigationLinkActive = pathname => {
    var currentPathName = this.props.location.pathname;
    return currentPathName === pathname;
  };

  render() {
    return (
      <nav>
        <ul className="nav">
          <li>
            <NavLink
              to="/"
              exact
              className="nav-link"
              activeClassName="nav-link nav-link--active"
            >
              <div className="nav-link__icon">
                {this.isNavigationLinkActive("/") ? (
                  <SvgProfileActive />
                ) : (
                  <SvgProfile />
                )}
              </div>
              My profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/search"
              className="nav-link"
              activeClassName="nav-link nav-link--active"
              isActive={this.isSearchNavigationActive}
            >
              <div className="nav-link__icon">
                {this.isSearchNavigationActive() ? (
                  <SvgListActive />
                ) : (
                  <SvgList />
                )}
              </div>
              Find a mentor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/help"
              className="nav-link"
              activeClassName="nav-link nav-link--active"
            >
              <div className="nav-link__icon">
                {this.isNavigationLinkActive("/host/help") ? (
                  <SvgHelpActive />
                ) : (
                  <SvgHelp />
                )}
              </div>
              Help
            </NavLink>
          </li>
          <li>
            <a className="nav-link" onClick={this.props.switch}>
              <div className="nav-link__icon">
                <SvgAdmin />
              </div>
              Switch to admin
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
