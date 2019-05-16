import React, { Component } from 'react';

const Edit = props => {
  return (
    <div
      onClick={props.handleButtonClick}
      /*className="edit"*/ attributeName="edit"
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
          fill-rule="nonzero"
          d="M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96a.996.996 0 0 0 0-1.41L18.37.29a.996.996 0 0 0-1.41 0L15 2.25 18.75 6l1.96-1.96z"
        />
      </svg>
    </div>
  );
};

export default Edit;
