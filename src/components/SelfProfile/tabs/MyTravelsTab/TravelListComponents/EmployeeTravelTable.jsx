import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import EmployeeTravelRow from './EmployeeTravelRow.jsx';

class EmployeeTravelTable extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="content__scrollable">
        <table className="table">
          <tbody>
            {users.map(user => (
              <EmployeeTravelRow
                column1={user.name}
                column2={user.surname}
                column3={user.activity}
                travelId={user.id}
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
)(EmployeeTravelTable);

EmployeeTravelTable.propTypes = {
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
