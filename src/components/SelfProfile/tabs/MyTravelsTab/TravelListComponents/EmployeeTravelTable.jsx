import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  loadTravelsFromAPI,
  loadEmployeeTravelFromAPI,
  loadApartmentsFromAPI,
} from '../../../../Menu_Management/Zmones_Tab/PeopleListComponents/actions/LDActions';

import EmployeeTravelRow from './EmployeeTravelRow.jsx';

import { employeeTravelShape } from '../../../../../types/proptypes';

class EmployeeTravelTable extends Component {
  constructor(props) {
    super(props);

    // this.props.dispatch(loadTravelsFromAPI());
    this.props.dispatch(loadEmployeeTravelFromAPI());
    // this.props.dispatch(loadApartmentsFromAPI());
  }

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
                column2={empTravel.travel.travelTo ? empTravel.travel.travelTo.title : '!missingDestination!'}
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

const mapStateToProps = state => ({
  employeeTravels: state.LDReducer.employeeTravels,
});

export default connect(
  mapStateToProps
)(EmployeeTravelTable);

EmployeeTravelTable.propTypes = {
  employeeTravels: PropTypes.arrayOf(employeeTravelShape).isRequired,
};
