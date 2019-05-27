import React from 'react';

export default function NavigationTabs(props) {
  const activeTab = props.dataShared;
  return (
    <ul className="tabs content__fixed">
      <li>
        <a
          className={
            activeTab === 'personal_info'
              ? 'tabs__link tabs__link--active'
              : 'tabs__link '
          }
          name="personal_info"
          onClick={props.handleButtonClick}
        >
          Personal info
        </a>
      </li>
      <li>
        <a
          className={
            activeTab === 'skills'
              ? 'tabs__link tabs__link--active'
              : 'tabs__link '
          }
          name="skills"
          onClick={props.handleButtonClick}
        >
          Invitations
        </a>
      </li>
      <li>
        <a
          className={
            activeTab === 'your_travels'
              ? 'tabs__link tabs__link--active'
              : 'tabs__link '
          }
          name="your_travels"
          onClick={props.handleButtonClick}
        >
          Your travels
        </a>
      </li>
    </ul>
  );
}
