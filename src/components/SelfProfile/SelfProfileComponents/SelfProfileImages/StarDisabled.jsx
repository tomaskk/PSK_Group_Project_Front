import React, { Component } from 'react';

const StarDisabled = () => {
    return (
        <div className="skill__star" alt="star" style={{display: 'inline-block'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13">
                <path fill="#8995A4" fill-rule="nonzero" d="M7 10.513L11.12 13l-1.093-4.687 3.64-3.153-4.794-.407L7 .333l-1.873 4.42-4.794.407 3.64 3.153L2.88 13z" />
            </svg>
        </div>);
}

export default StarDisabled;