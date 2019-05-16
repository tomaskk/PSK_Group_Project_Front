import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr class="table__row">
        <td class="table__cell table__cell--first">
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
        <td class="table__cell table__cell--main ">{this.props.topic}</td>
        <td class="table__cell table__cell--tiny table__cell--short table__cell--date">
          {this.props.date}
        </td>
        <td class="table__cell table__cell--tiny table__cell--short table__cell--last">
          <div class="table__content table__content--actions">
            {this.props.hours}
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
