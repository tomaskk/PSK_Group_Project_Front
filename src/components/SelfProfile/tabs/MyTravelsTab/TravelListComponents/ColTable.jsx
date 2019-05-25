import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ColTable extends Component {
  render() {
    return (
      <div>
        <ul className="tabs">
          <li>
            <Link
              to="/host/manage/users"
              className="tabs__link tabs__link--active"
            >
              Available users
            </Link>
          </li>
          <li>
            <Link to="/host/manage/voyages" className="tabs__link">
              Available voyages
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
