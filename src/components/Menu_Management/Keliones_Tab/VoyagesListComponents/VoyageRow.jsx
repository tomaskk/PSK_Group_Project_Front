import React, { Component } from 'react';
import SvgHand from '../../../common/images/SvgHand.jsx';

import TravelCreationPopup from '../../../TravelCreationPopup';

class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };

    this.onRowClick = this.onRowClick.bind(this);
    this.onExitVoyagePopup = this.onExitVoyagePopup.bind(this);
  }

  onRowClick(e) {
    e.preventDefault();
    this.setState({ showPopup: true });
  }

  onExitVoyagePopup() {
    this.setState({ showPopup: false });
  }

  render() {
    const { name, startsOn } = this.props;

    return (
      <div>
        <div onClick={this.onRowClick}>
          <tr className="table__row">
            <td className="table__cell table__cell--long table__cell--first">
              <div className="table__content">{name}</div>
            </td>
            <td className="table__cell table__cell--tiny table__cell--short table__cell--date">
              {startsOn}
            </td>
            <td className="table__cell table__cell--tiny table__cell--short table__cell--last">
              <div className="table__actions">
                <a href="" className="table__action" onClick={this.onRowClick}>
                  <SvgHand />
                </a>
              </div>
            </td>
          </tr>
        </div>
        {this.state.showPopup && (
          <TravelCreationPopup
            popupTitle={name}
            showingPopup={this.state.showPopup}
            onTogglePopup={this.onExitVoyagePopup}
          />
        )}
      </div>
    );
  }
}

export default UserRow;
