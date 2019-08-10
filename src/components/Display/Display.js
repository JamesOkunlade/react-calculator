import React from 'react';

const display = (props) => {
  return (
    <div className = "display">
      <div className = "display-value">{props.value}</div>
    </div>
  );
}

export default display;
