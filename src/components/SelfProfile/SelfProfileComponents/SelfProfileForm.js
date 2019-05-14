import React from 'react'

import Calendar from './SelfProfileImages/Calendar.jsx'
import CalendarDisabled from './SelfProfileImages/CalendarDisabled.jsx'
import PlusActive from './SelfProfileImages/PlusActive.jsx'
import Edit from '../SelfProfileComponents/SelfProfileImages/Edit.jsx'

export default function SelfProfileForm(props) {

    const editIsDisabled = props.dataShared.isEditModeDisabled

    const editBtns = 
        <div class="actions">
        <button
            type="button"
            className="button button--cancel"
            name="cancel_self_profile"
            onClick={props.handleButtonClick}>
            Cancel</button>
        <button
            type="button"
            className="button button--primary"
            name="save_personal_info"
            onClick={props.handleButtonClick}>
            Save</button>
        </div>

        const editButton = !editIsDisabled && (
        <div className="profile__add-photo">
            <PlusActive />
        </div>) 

        const EditPhotoInput = 
                    <div className="form__field">
                        <label htmlFor="photo" className="form__label">Photo URL:</label>
                        <div className="form__input-suffix-container">
                            <input type="text"
                                name="photo"
                                className={className + " form__input-suffix-field"} 
                                value={props.dataShared.photo}
                                onChange={props.handleChange} />
                        </div>
                    </div>

    const className = editIsDisabled ? "form__input form__input--disabled" : "form__input"
    return (
        <form className="form">
            <div class="profile__section section">
                <div className="form__row">
                    <div className="profile__photos" >
                        <div class="progress-circle progress-circle--full">
                            <img src = { props.dataShared.photo } class="photo profile__photo" />
                        </div>
                        {editButton}
                    </div>
                    {editIsDisabled && <Edit handleButtonClick={props.handleButtonClick} attributeName="edit" name = "personal_info_edit"/>}
                </div>
                <div className="form__row">
                    <div className="form__field">
                        <label htmlFor="name" className="form__label">Name</label>
                        <input className={className}
                            type="text"
                            name="name"
                            value={props.dataShared.name}
                            disabled={editIsDisabled}
                            onChange={props.handleChange} />
                    </div>
                    <div className="form__field">
                        <label htmlFor="surname" className="form__label">Surname</label>
                        <input className={className}
                            type="text"
                            name="surname"
                            value={props.dataShared.surname}
                            disabled={editIsDisabled}
                            onChange={props.handleChange} />
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__field form__field--wide">
                        <label htmlFor="email" className="form__label">Email address</label>
                        <input type="text"
                            name="email"
                            className={className}
                            value={props.dataShared.email}
                            disabled={editIsDisabled}
                            onChange={props.handleChange} />
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__field">
                        <label htmlFor="city" className="form__label">City</label>
                        <select name="city"
                            className={className}
                            value={props.dataShared.city}
                            disabled={editIsDisabled}
                            onChange={props.handleChange} >
                            <option>Vilnius</option>
                            <option>Kaunas</option>
                            <option>Chicago</option>
                            <option>Toronto</option>
                            <option>London</option>
                        </select>
                    </div>
                </div>
                <div className="form__row form__row--last">
                    <div className="form__field">
                        <label htmlFor="sld" className="form__label">Next SLD</label>
                        <div className="form__input-suffix-container">
                            <input type="text"
                                name="sld"
                                className={className + " form__input-suffix-field"} 
                                value={props.dataShared.sld}
                                disabled={editIsDisabled}
                                onChange={props.handleChange} />
                            {editIsDisabled ? <CalendarDisabled /> : <Calendar />}
                        </div>
                    </div>
                </div>
                <div className="form__row form__row--last">
                    {!editIsDisabled && EditPhotoInput}
                </div>
                <div>
                    { !editIsDisabled ? editBtns : "" }
                </div>
            </div>
        </form>
    )
}
