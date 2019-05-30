import React from 'react';

import Calendar from './SelfProfileImages/Calendar.jsx';
import CalendarDisabled from './SelfProfileImages/CalendarDisabled.jsx';
import PlusActive from './SelfProfileImages/PlusActive.jsx';
import Edit from './SelfProfileImages/Edit.jsx';

export default function SelfProfileForm(props) {
  const editIsDisabled = props.dataShared.isEditModeDisabled;

  const editBtns = (
    <div className="actions">
      <button
        type="button"
        className="button button--cancel"
        name="cancel_self_profile"
        onClick={props.handleButtonClick}
      >
        Cancel
      </button>
      <button
        type="button"
        className="button button--primary"
        name="save_personal_info"
        onClick={props.handleButtonClick}
      >
        Save
      </button>
    </div>
  );

  const editButton = !editIsDisabled && (
    <div className="profile__add-photo">
      <PlusActive />
    </div>
  );

  const EditPhotoInput = (
    <div className="form__field">
      <label htmlFor="photo" className="form__label">
        Photo URL:
      </label>
      <div className="form__input-suffix-container">
        <input
          type="text"
          name="photo"
          className={`${className} form__input-suffix-field`}
          value={props.dataShared.photo}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );

  const className = editIsDisabled
    ? 'form__input form__input--disabled'
    : 'form__input';
  return (
    <form className="form">
      <div className="profile__section section">
        <div className="form__row">
          <div className="profile__photos">
            <div className="progress-circle progress-circle--full">
              <img
                src={props.dataShared.photo}
                className="photo profile__photo"
                height="64"
                width="64"
              />
            </div>
            {editButton}
          </div>
          {editIsDisabled && (
            <Edit
              handleButtonClick={props.handleButtonClick}
              attributeName="edit"
              name="personal_info_edit"
            />
          )}
        </div>
        <div className="form__row">
          <div className="form__field">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              className={className}
              type="text"
              name="name"
              value={props.dataShared.name}
              disabled={editIsDisabled}
              onChange={props.handleChange}
            />
          </div>
          <div className="form__field">
            <label htmlFor="surname" className="form__label">
              Surname
            </label>
            <input
              className={className}
              type="text"
              name="surname"
              value={props.dataShared.surname}
              disabled={editIsDisabled}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="form__row">
          <div className="form__field form__field--wide">
            <label htmlFor="email" className="form__label">
              Email address
            </label>
            <input
              type="text"
              name="email"
              className={className}
              value={props.dataShared.email}
              disabled={editIsDisabled}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="form__row form__row--last">
          {!editIsDisabled && EditPhotoInput}
        </div>
        <div>{!editIsDisabled ? editBtns : ''}</div>
      </div>
    </form>
  );
}
