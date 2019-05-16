import React from 'react';
import AddGoalButton from './AddGoalButton.jsx';
import Delete from './SelfProfileImages/Delete.jsx';

export default function Goals(props) {
  const wantsToLearnItems = [...props.userInfo.wantsToLearn];
  const numberOfGoals = wantsToLearnItems.length;

  const editBtnsGoals = (
    <div className="actions">
      <button
        type="button"
        className="button button--cancel"
        name="cancel_goals_edit"
        onClick={props.handleButtonClick}
      >
        Cancel
      </button>
      <button
        type="button"
        className="button button--primary"
        name="save_goals_edit"
        onClick={props.handleButtonClick}
      >
        Save
      </button>
    </div>
  );

  const newGoal = (
    <div className="skill skill--badge">
      <label htmlFor="newGoalSubject" className="form__label">
        New subject
      </label>
      <input
        type="text"
        name="newGoalSubject"
        className="form__input-suffix-container"
        value={props.dataShared.newGoalSubject}
        onChange={props.handleChange}
      />

      <label htmlFor="newGoalComment" className="form__label">
        Comment
      </label>
      <input
        type="text"
        name="newGoalComment"
        className="form__input-suffix-container"
        value={props.dataShared.newGoalComment}
        onChange={props.handleChange}
      />
    </div>
  );

  const goalsRowItems = wantsToLearnItems.map((goal, index) => (
    <li
      key={goal.id}
      className={
        index + 1 === numberOfGoals
          ? 'goals__row goals__row--last'
          : 'goals__row'
      }
    >
      <div className="goal">
        <h3 className="heading3">{goal.subject}</h3>
        <p>{goal.comment}</p>
      </div>
    </li>
  ));

  const goalsRowItemsEdit = (
    <div>
      {props.dataShared.wantsToLearn.map((goal, index) => (
        <li
          className={
            index + 1 === numberOfGoals
              ? 'goals__row goals__row--last'
              : 'goals__row'
          }
        >
          <div className="skill skill--badge">
            <label className="form__label">Subject</label>
            <input
              type="text"
              name="toLearnSubjects"
              id={index}
              className="form__input-suffix-container"
              value={props.dataShared.toLearnSubjects[index]}
              onChange={props.handleChangeArrays}
            />

            <label className="form__label">Comment</label>
            <input
              type="text"
              name="toLearnComments"
              id={index}
              className="form__input-suffix-container"
              value={props.dataShared.toLearnComments[index]}
              onChange={props.handleChangeArrays}
            />
            <button
              type="button"
              className="button"
              name="delete_goal"
              id={index}
              onClick={props.handleButtonClick}
              style={{ padding: '10px' }}
            >
              <Delete />
            </button>
          </div>
        </li>
      ))}
    </div>
  );

  return (
    <div>
      <h2 className="heading2">I want to learn</h2>

      <ul className="goals">
        {props.dataShared.isEditModeDisabled
          ? goalsRowItems
          : goalsRowItemsEdit}
      </ul>

      {!props.dataShared.isEditModeDisabled && (
        <div>
          {newGoal}
          <AddGoalButton
            name="create_goal"
            onClick={props.handleButtonClick}
            handleButtonClick={props.handleButtonClick}
          />
          {editBtnsGoals}
        </div>
      )}
    </div>
  );
}
