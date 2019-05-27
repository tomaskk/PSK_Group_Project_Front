import React, { Component } from 'react';

export default class UserProfile2Nav extends Component {
  handleSpecialistTabClick = () => {
    if (this.props.currentState !== 'tab1') this.props.stateChanger();
  };

  handleLearnTabClick = () => {
    if (this.props.currentState === 'tab2') this.props.stateChanger();
  };

  render() {
    const activeClass = 'tabs__link tabs__link--active';
    const inactiveClass = 'tabs__link';

    const SpecialistClassName =
      this.props.currentState === 'tab2' ? activeClass : inactiveClass;
    const LearnClassName =
      this.props.currentState !== 'tab1' ? activeClass : inactiveClass;

    return (
      <div>
        <ul className="tabs content__fixed">
          <li>
            <a
              onClick={this.handleSpecialistTabClick}
              href={"/#/host/user/" + this.props.userid}
              className={SpecialistClassName}
              alt="specialist-tab"
            >
              {this.props.link1Name}
            </a>
          </li>

        </ul>
      </div>
    );
  }
}
