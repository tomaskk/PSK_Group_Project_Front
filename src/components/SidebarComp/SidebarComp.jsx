import React, { Component } from 'react';
import { connect } from 'react-redux';

import SidebarStandard from './Sidebar/Sidebar.jsx';
import SidebarAdmin from './SidebarAdmin/SidebarAdmin.jsx';

class SidebarComp extends Component {
  constructor(props) {
    super(props);
    this.state = { isAdmin: true };
    this.handleSidebarSwitch = this.handleSidebarSwitch.bind(this);
  }

  handleSidebarSwitch() {
    this.setState({ isAdmin: !this.state.isAdmin });
  }

  render() {
    return (
      <div>
        {this.state.isAdmin ? (
          <SidebarAdmin
            switch={this.handleSidebarSwitch}
            userInfo={this.props.selfProfileReducer}
          />
        ) : (
          <SidebarStandard
            switch={this.handleSidebarSwitch}
            userInfo={this.props.selfProfileReducer}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selfProfileReducer: state.selfProfileReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(SidebarComp);
