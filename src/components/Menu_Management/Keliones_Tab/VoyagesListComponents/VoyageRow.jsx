import React, { Component } from 'react';
import SvgDelete from './images/SvgDelete.jsx';

import TravelCreationPopup from '../../../TravelCreationPopup';

class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };

    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
    this.onExitVoyagePopup = this.onExitVoyagePopup.bind(this);
  }

  onDeleteClick(e) {
    e.preventDefault();
    this.props.onDeleteClick(this.props.id);
  }

  onRowClick() {
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
            <td className="table__cell table__cell--last table__cell--date">
              <div className="table__content table__content--actions">
                {startsOn}
                <div className="table__actions">
                  <a
                    href=""
                    className="table__action"
                    onClick={this.onDeleteClick}
                  >
                    <SvgDelete />
                  </a>
                </div>
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
