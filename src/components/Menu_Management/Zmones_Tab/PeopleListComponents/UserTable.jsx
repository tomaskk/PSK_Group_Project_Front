import React, { Component } from 'react';
import UserRow from './UserRow.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

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
                name={user.name}
                surname={user.surname}
                date={user.date}
                hours={user.hours}
                id={user.id}
                pic={user.pic}
                activity={user.activity}
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

UserTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      surname: PropTypes.string,
      topic: PropTypes.string,
      hours: PropTypes.string,
      date: PropTypes.string
    })
  )
};
