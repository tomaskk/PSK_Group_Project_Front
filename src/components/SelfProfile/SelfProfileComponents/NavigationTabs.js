import React from 'react'

export default function NavigationTabs(props) {
    const activeTab = props.dataShared;
    return (
        <ul class="tabs content__fixed">
            <li><a
                className={activeTab === "personal_info" ? "tabs__link tabs__link--active" : "tabs__link "}
                name="personal_info"
                onClick={props.handleButtonClick}>
                Personal info</a>
            </li>
            <li><a
                className={activeTab === "skills"? "tabs__link tabs__link--active" : "tabs__link "}
                name="skills"
                onClick={props.handleButtonClick}>
                Skills</a>
            </li>
            <li><a
                className={activeTab === "change_password" ? "tabs__link tabs__link--active" : "tabs__link "}
                name="change_password"
                onClick={props.handleButtonClick}>
                Change password</a>
            </li>
        </ul>
    )
}