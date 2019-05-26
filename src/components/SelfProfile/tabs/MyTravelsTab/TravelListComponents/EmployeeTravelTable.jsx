import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import EmployeeTravelRow from './EmployeeTravelRow.jsx';

import { employeeTravelShape } from '../../../../../types/proptypes';

class EmployeeTravelTable extends Component {
  render() {
    const { employeeTravels } = this.props;
    console.log(this.props);

    return (
      <div className="content__scrollable">
        <table className="table">
          <tbody>
            {employeeTravels.map(empTravel => (
              <EmployeeTravelRow
                key={empTravel.id}
                column1={empTravel.travel.name}
                column2={empTravel.travel.travelTo.title}
                column3={empTravel.confirm}
                travelData={empTravel.travel}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    employeeTravels: state.employeeTravelReducer.employeeTravels,
  };
};

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({}, dispatch)
)(EmployeeTravelTable);

EmployeeTravelTable.propTypes = {
  employeeTravels: PropTypes.arrayOf(employeeTravelShape).isRequired,
};
