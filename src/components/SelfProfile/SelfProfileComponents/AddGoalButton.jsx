import React from 'react';
import Plus from './SelfProfileImages/Plus.jsx';

export default function AddGoalButton(props) {
  return (
    <button
      type="button"
      className="button button--add"
      name="create_goal"
      onClick={props.handleButtonClick}
    >
      <Plus />
      <div>Add a new goal</div>
    </button>
  );
}
