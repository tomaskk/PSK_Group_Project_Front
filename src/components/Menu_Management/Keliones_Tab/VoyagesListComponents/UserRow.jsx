import React, { Component } from 'react';
import SvgDelete from './images/SvgDelete.jsx';
import SvgHand from './images/SvgHand.jsx';
import { Link } from 'react-router-dom';

class UserRow extends Component {
  constructor(props) {
    super(props);

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick(e) {
    e.preventDefault();
    this.props.onDeleteClick(this.props.id);
  }

  render() {
    return (
      <tr class="table__row">
        <td class="table__cell table__cell--long table__cell--first">
          <div class="table__content">
            <Link to={`/host/user/${this.props.id}`}>
              <img
                src={this.props.pic}
                style={imgStyle}
                class="photo table__photo"
              />
            </Link>
            {this.props.name}
          </div>
        </td>
        <td class="table__cell table__cell--last table__cell--date">
          <div class="table__content table__content--actions">
            {this.props.lastActive}
            <div class="table__actions">
              <a href="" class="table__action">
                <SvgHand />
              </a>
              <a href="" class="table__action" onClick={this.onDeleteClick}>
                <SvgDelete />
              </a>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

const imgStyle = {
  width: '36px'
};

export default UserRow;
