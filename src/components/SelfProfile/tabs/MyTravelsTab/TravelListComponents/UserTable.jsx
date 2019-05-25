import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import UserRow from './UserRow.jsx';

class UserTable extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="content__scrollable">
        <table className="table">
          <tbody>
            {users.map(user => (
              <UserRow
                name={user.name}
                surname={user.surname}
                date={user.date}
                hours={user.hours}
                id={user.id}
                pic={user.pic}
                activity={user.activity}
                topic={user.topic}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.LDReducer.filteredUsers,
});

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({}, dispatch)
)(UserTable);

UserTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      surname: PropTypes.string,
      topic: PropTypes.string,
      hours: PropTypes.string,
      date: PropTypes.string,
    })
  ),
};
