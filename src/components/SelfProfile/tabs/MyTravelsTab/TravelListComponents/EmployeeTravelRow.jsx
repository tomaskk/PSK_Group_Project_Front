import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SvgHand from '../../../../common/images/SvgHand';
import TravelCreationPopup from '../../../../TravelCreationPopup/TravelCreationPopup';

import {
  employeeTravelShape,
  travelShape,
} from '../../../../../types/proptypes';

class EmployeeTravelRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopup: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState(prevState => ({
      showPopup: !prevState.showPopup,
    }));
  }

  handleClick(e) {
    e.preventDefault();
    this.togglePopup();
  }

  renderConfirmStatus(value) {
    return value === true ? 'Confirmed' : 'Pending';
  }

  render() {
    const {
      column1, column2, column3, travelData
    } = this.props;

    return (
      <tr className="table__row">
        <td className="table__cell table__cell--first">
          <div className="table__content">{column1}</div>
        </td>
        <td className="table__cell table__cell--main ">{column2}</td>
        <td className="table__cell table__cell--tiny table__cell--short table__cell--date">
          {this.renderConfirmStatus(column3)}
        </td>
        <td className="table__cell table__cell--tiny table__cell--short table__cell--last">
          <div className="table__actions">
            <a href="" className="table__action" onClick={this.handleClick}>
              <SvgHand />
            </a>
          </div>
        </td>
        <TravelCreationPopup
          popupTitle="Your travel information:"
          travelData={travelData}
          showingPopup={this.state.showPopup}
          onTogglePopup={this.togglePopup}
          readOnly
        />
      </tr>
    );
  }
}

EmployeeTravelRow.propTypes = {
  column1: PropTypes.string,
  column2: PropTypes.string,
  column3: PropTypes.string,
  travelData: travelShape.isRequired,
};

export default EmployeeTravelRow;
