import React, { Component } from 'react';

const Plus = () => {
  return (
    <div className="button__icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="26"
        viewBox="0 0 16 16"
      >
        <path
          fill="#8995A4"
          fill-rule="nonzero"
          d="M8.75 4.25h-1.5v3h-3v1.5h3v3h1.5v-3h3v-1.5h-3v-3zM8 .5C3.86.5.5 3.86.5 8c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5C15.5 3.86 12.14.5 8 .5zM8 14c-3.308 0-6-2.693-6-6 0-3.308 2.692-6 6-6 3.307 0 6 2.692 6 6 0 3.307-2.693 6-6 6z"
        />
      </svg>
    </div>
  );
};

export default Plus;
