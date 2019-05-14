import React from 'react'
import Plus from './SelfProfileImages/Plus.jsx'

export default function AddSkillButton(props) {
    return (
        <button type="button" className="button button--add" name = "create_skill" onClick = {props.handleButtonClick}>
            <Plus />
            <div>Add a new skill</div>
        </button>
    )
}