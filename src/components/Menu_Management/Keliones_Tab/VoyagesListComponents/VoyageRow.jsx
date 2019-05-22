import React, { Component } from 'react';
import SvgDelete from './images/SvgDelete.jsx';

import TravelCreationPopup from '../../../TravelCreationPopup';

class UserRow extends Component {
  constructor(props) {
    super(props);

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick(e) {
    e.preventDefault();
    this.props.onDeleteClick(this.props.id);
  }

  onRowClick() {
    console.log('heello');
  }

  render() {
    return (
      <tr className="table__row">
        <div onClick={this.onRowClick}>
          <td className="table__cell table__cell--long table__cell--first">
            <div className="table__content">{this.props.name}</div>
          </td>
          <td className="table__cell table__cell--last table__cell--date">
            <div className="table__content table__content--actions">
              {this.props.lastActive}
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
        </div>
      </tr>
    );
  }
}

const imgStyle = {
  width: '36px',
};

export default UserRow;
