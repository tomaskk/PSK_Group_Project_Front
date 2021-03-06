import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class ColTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="tabs">
          <li>
            <Link to="/host/manage/users" className="tabs__link">
              Available users
            </Link>
          </li>
          <li>
            <Link
              to="/host/manage/voyages"
              className="tabs__link tabs__link--active"
            >
              Travels list
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
