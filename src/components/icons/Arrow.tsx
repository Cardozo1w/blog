import React from 'react'

const Arrow = ({className}: {className: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <rect width="48" height="48" fill="white" fill-opacity="0.01" />
      <path
        d="M19 11H37V29"
        stroke="#000000"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5441 36.4559L36.9999 11"
        stroke="#000000"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Arrow