import React, { Component } from 'react';
import UserRow from './UserRow.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var users = this.props.users;
    return (
      <div className="content__scrollable">
        <table className="table">
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={index}
                name={user.firstName}
                surname={user.lastName}
                id={user.id}
                pic={user.profilePhoto}
                activity={user.available}
                topic={user.topic}
                email= { user.email }
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.LDReducer.filteredUsers
});

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({}, dispatch)
)(UserTable);

