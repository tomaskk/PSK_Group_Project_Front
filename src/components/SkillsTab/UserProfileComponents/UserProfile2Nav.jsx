import React, { Component } from 'react';

export default class UserProfile2Nav extends Component {
  handleSpecialistTabClick = () => {
    if (this.props.currentState !== 'Specialist') this.props.stateChanger();
  };

  handleLearnTabClick = () => {
    if (this.props.currentState === 'Specialist') this.props.stateChanger();
  };

  render() {
    const activeClass = 'tabs__link tabs__link--active';
    const inactiveClass = 'tabs__link';

    const SpecialistClassName =
      this.props.currentState === 'Specialist' ? activeClass : inactiveClass;
    const LearnClassName =
      this.props.currentState !== 'Specialist' ? activeClass : inactiveClass;

    return (
      <div>
        <ul className="tabs content__fixed">
          <li>
            <a
              href="#"
              onClick={this.handleSpecialistTabClick}
              className={SpecialistClassName}
              alt="specialist-tab"
            >
              {this.props.link1Name}
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={this.handleLearnTabClick}
              className={LearnClassName}
              alt="learn-tab"
            >
              {this.props.link2Name}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
