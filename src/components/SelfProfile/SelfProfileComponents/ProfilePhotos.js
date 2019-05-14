import React from 'react'

import PlusActive from './SelfProfileImages/PlusActive.jsx'

export default function ProfilePhotos(props) {
    const editIsDisabled = props.dataShared.isEditModeDisabled
    const editButton = !editIsDisabled && (
        <div className="profile__add-photo">
            <PlusActive />
        </div>)

    return (
        <div className="profile__photos" >
            <div class="progress-circle progress-circle--full">
                <img src="https://via.placeholder.com/64x64" class="photo profile__photo" />
            </div>
            {editButton}
        </div>
    )
}