import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Logo from './SidebarAdminComponents/Logo.jsx';
import NavAdmin from './SidebarAdminComponents/NavAdmin.jsx';
import SvgSchool from '../../common/images/SvgSchool.jsx';
import Copyright from './SidebarAdminComponents/Copyright.jsx';

class SidebarAdmin extends Component {
  render() {
    return (
      <div className="sidebar">
        <div>
          <Logo />
          <div className="me">
            <Link to="/" className="nav-link">
              <div className="progress-circle">
                <img
                  src={ this.props.userInfo.photo === undefined 
                      || this.props.userInfo.photo === null 
                      || this.props.userInfo.photo ==='string' 
                      ? 'https://www.w3schools.com/howto/img_avatar.png' 
                      : this.props.userInfo.photo }
                  className="photo me__photo"
                  height="64"
                  width="64"
                />
              </div>
            </Link>
            <h2 className="heading2 me__name">
              {this.props.userInfo.name} {this.props.userInfo.surname}
            </h2>
            <div className="badge">
              <SvgSchool />
              Welcome
            </div>
          </div>
          <NavAdmin switch={this.props.switch} />
        </div>
        <Copyright />
      </div>
    );
  }
}

export default SidebarAdmin;
