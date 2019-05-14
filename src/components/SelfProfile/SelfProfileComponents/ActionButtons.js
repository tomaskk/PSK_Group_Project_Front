import React from 'react'

export default function ActionButtons(props) {
    return (
        <div class="actions">
            <button
                type="button"
                className="button button--cancel"
                name="cancel"
                onClick={props.handleButtonClick}>
                Cancel</button>
            <button
                type="button"
                className="button button--primary"
                name="save"
                onClick={props.handleButtonClick}>
                Save</button>
        </div>
    )
}