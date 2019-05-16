import React from 'react';
import Stars from './Stars';
import Delete from './SelfProfileImages/Delete.jsx';
import AddSkillButton from './AddSkillButton';

export default function Skills(props) {
  const specialistAtItems = [...props.dataShared.masterAt];
  const numberOfSkills = specialistAtItems.length;

  const newSkill = (
    <div className="skill skill--badge">
      <label htmlFor="newSkillSubject" className="form__label">
        New skill
      </label>
      <input
        type="text"
        name="newSkillSubject"
        className="form__input-suffix-container"
        value={props.dataShared.newSkillSubject}
        onChange={props.handleChange}
      />

      <label htmlFor="newSkillRating" className="form__label">
        Level
      </label>
      <input
        type="number"
        name="newSkillRating"
        className="form__input-suffix-container"
        value={props.dataShared.newSkillRating}
        onChange={props.handleChange}
        min="0"
        max="3"
      />
    </div>
  );

  const editSkills = (
    <button
      type="button"
      onClick={props.handleButtonClick}
      style={{ background: 'Transparent', border: 'none' }}
      attributeName="edit"
      name="skills_enter_edit_mode"
      className="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        attributeName="edit"
      >
        <path
          fill="#404DFA"
          fillRule="nonzero"
          d="M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96a.996.996 0 0 0 0-1.41L18.37.29a.996.996 0 0 0-1.41 0L15 2.25 18.75 6l1.96-1.96z"
        />
      </svg>
    </button>
  );

  const skillRowItemsEdit = (
    <div>
      {props.dataShared.masterAt.map((skill, index) => (
        <li
          className={
            index + 1 === numberOfSkills
              ? 'skills__row skills__row--last'
              : 'skills__row'
          }
        >
          <div className="skill skill--badge">
            <label className="form__label">Subject</label>
            <input
              type="text"
              name="masterAtSubjects"
              id={index}
              className="form__input-suffix-container"
              value={props.dataShared.masterAtSubjects[index]}
              onChange={props.handleChangeArrays}
            />

            <label className="form__label">Level</label>
            <input
              type="number"
              name="masterAtStars"
              id={index}
              className="form__input-suffix-container"
              value={props.dataShared.masterAtStars[index]}
              onChange={props.handleChangeArrays}
              min="1"
              max="3"
            />
          </div>
          <button
            type="button"
            className="button"
            name="delete_skill"
            id={index}
            onClick={props.handleButtonClick}
            style={{ padding: '10px' }}
          >
            <Delete />
          </button>
        </li>
      ))}
    </div>
  );

  const skillRowItems = specialistAtItems.map((skill, index) => (
    <li
      className={
        index + 1 === numberOfSkills
          ? 'skills__row skills__row--last'
          : 'skills__row'
      }
    >
      <div className="skill skill--badge">
        {skill.subject}
        <div className="skill__stars">
          <Stars starCount={skill.stars} />
        </div>
      </div>
    </li>
  ));

  return (
    <div>
      <h2 className="heading2">I'm a specialist at</h2>

      {props.dataShared.isEditModeDisabled && editSkills}

      <ul className="skills">
        {props.dataShared.isEditModeDisabled
          ? skillRowItems
          : skillRowItemsEdit}
      </ul>

      {!props.dataShared.isEditModeDisabled && (
        <div>
          {newSkill}
          <AddSkillButton
            name="create_skill"
            onClick={props.handleButtonClick}
            handleButtonClick={props.handleButtonClick}
          />
        </div>
      )}
    </div>
  );
}
