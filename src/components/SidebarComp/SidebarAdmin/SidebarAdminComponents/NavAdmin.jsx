import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import SvgHelp from '../../../common/images/SvgHelp.jsx';
import SvgHelpActive from '../../../common/images/SvgHelpActive.jsx';
import SvgProfile from '../../../common/images/SvgProfile.jsx';
import SvgProfileActive from '../../../common/images/SvgProfileActive.jsx';
import SvgList from '../../../common/images/SvgList.jsx';
import SvgListActive from '../../../common/images/SvgListActive.jsx';
import SvgAdmin from '../../../common/images/SvgAdmin.jsx';
import SvgAdminActive from '../../../common/images/SvgAdminActive.jsx';

const ADMIN_ROUTES = ['users', 'lost', 'requests', 'hours', 'user'];

class NavAdmin extends Component {
  isAdminNavigationActive = () => {
    var currentPathName = this.props.location.pathname;
    return currentPathName.search(ADMIN_ROUTES.join('|')) !== -1;
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
                {this.isNavigationLinkActive('/') ? (
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
              to="/host/manage/users"
              className="nav-link"
              activeClassName="nav-link nav-link--active"
              isActive={this.isAdminNavigationActive}
            >
              <div className="nav-link__icon">
                {this.isNavigationLinkActive('/host/admin') ? (
                  <SvgListActive />
                ) : (
                  <SvgList />
                )}
              </div>
              Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/help"
              className="nav-link"
              activeClassName="nav-link nav-link--active"
            >
              <div className="nav-link__icon">
                {this.isNavigationLinkActive('/host/help') ? (
                  <SvgHelpActive />
                ) : (
                  <SvgHelp />
                )}
              </div>
              Help
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavAdmin);
