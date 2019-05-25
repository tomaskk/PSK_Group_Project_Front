import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SvgHand from './images/SvgHand.jsx';

class EmployeeTravelRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      assignTravelModal: false
    };

    this.handleHandClick = this.handleHandClick.bind(this);
  }

  handleHandClick(e) {
    // e.preventDefault();
    console.log('You clicked it! You monster...');
  }

  render() {
    return (
      <tr className="table__row">
        <td className="table__cell table__cell--first">
          <div className="table__content">
            <Link to={`/host/user/${this.props.id}`}>
              <img
                src={this.props.pic}
                style={imgStyle}
                className="photo table__photo"
              />
            </Link>
            {this.props.name}
          </div>
        </td>
        <td className="table__cell table__cell--main ">{this.props.surname}</td>
        <td className="table__cell table__cell--tiny table__cell--short table__cell--date">
          {this.props.activity}
        </td>
        <td className="table__cell table__cell--tiny table__cell--short table__cell--last">
          <div className="table__actions">
            <a href="" className="table__action" onClick={this.handleHandClick}>
              <SvgHand />
            </a>
          </div>
        </td>
      </tr>
    );
  }
}

const imgStyle = {
  width: '36px',
};

export default EmployeeTravelRow;
