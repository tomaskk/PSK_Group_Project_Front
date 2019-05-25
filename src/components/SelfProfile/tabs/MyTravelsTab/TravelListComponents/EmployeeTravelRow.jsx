import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SvgHand from '../../../../common/images/SvgHand';
import TravelCreationPopup from '../../../../TravelCreationPopup/TravelCreationPopup';

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

  render() {
    const { column1: name, column2: surname, column3: activity } = this.props;

    return (
      <tr className="table__row">
        <td className="table__cell table__cell--first">
          <div className="table__content">{name}</div>
        </td>
        <td className="table__cell table__cell--main ">{surname}</td>
        <td className="table__cell table__cell--tiny table__cell--short table__cell--date">
          {activity}
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
  travelId: PropTypes.number.isRequired,
};

export default EmployeeTravelRow;
