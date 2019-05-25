import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Logo from './SidebarComponents/Logo.jsx';
import Nav from './SidebarComponents/Nav.jsx';
import SvgSchool from '../../common/images/SvgSchool.jsx';
import Copyright from './SidebarComponents/Copyright.jsx';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div>
          <Logo />
          <div className="me">
            <Link to="/" className="nav-link">
              <div className="progress-circle">
                <img
                  src={this.props.userInfo.photo}
                  className="photo me__photo"
                  height="64"
                  width="64"
                />
              </div>
            </Link>
            <h2 className="heading2 me__name">
              {this.props.userInfo.self.firstName}{' '}
              {this.props.userInfo.self.lastName}
            </h2>
            <div className="badge">
              <SvgSchool />
              Welcome (disable me)
            </div>
          </div>
          <Nav switch={this.props.switch} />
        </div>
        <Copyright />
      </div>
    );
  }
}

export default Sidebar;
