import React from 'react';

import '../css/Button.css';

const Button = (props) => {
  return (
    <div>
      <button className={props.buttonStyle}>{props.buttonText}</button>
    </div>
  )
}

export default Button
