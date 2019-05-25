import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SvgHand from '../../../common/images/SvgHand.jsx';
import UserPopup from './Popups/UserPopup.jsx';
import AssignTravelPopup from './Popups/AssignTravelPopup.jsx';
import Plus from '../../../common/images/Plus.jsx';

class UserRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      assignTravelModal: false
    };

    this.handleHandClick = this.handleHandClick.bind(this);
    this.handlePlusClick = this.handlePlusClick.bind(this);
  }

  handleHandClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  }

  handlePlusClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      assignTravelModal: !prevState.assignTravelModal,
    }));
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
        <td class="table__cell table__cell--main ">{this.props.surname}</td>
        <td class="table__cell table__cell--tiny table__cell--short table__cell--date">
          {this.props.activity}
        </td>
        <td class="table__cell table__cell--tiny table__cell--short table__cell--last">
          <div class="table__actions">
              <a href="" class="table__action" onClick={this.handleHandClick}>
                <SvgHand />
              </a>
              <a href="" class="table__action" onClick={this.handlePlusClick}>
                <Plus />
              </a>
            </div>
        </td>
        <UserPopup onToggle={this.handleHandClick} isOpen={this.state.showModal} userInfo={this.props}/>
        <AssignTravelPopup onToggle={this.handlePlusClick} isOpen={this.state.assignTravelModal} userInfo={this.props}/>
      </tr>
    );
  }
}

const imgStyle = {
  width: '36px'
};

export default UserRow;
