import React from 'react'

function headphones(props) {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
        stroke="#A61E20"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z"
        fill="#A61E20"
        stroke="#A61E20"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z"
        fill="#A61E20"
        stroke="#A61E20"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default headphones