import React from 'react';

const button = (props) => {

  const handleClick = (buttonName) => {
    return props.clickHandler(props.name);
  }

  const wide = props.wide ? "50%" : "25%"

  const style = {
    background: props.color,
    width: wide,
    borderRight: `1px solid #fff`

  }
  return (
    <div className = "button" style = {style} onClick ={handleClick}>
      <h3>{props.name}</h3>
    </div>
  );
}


export default button;
