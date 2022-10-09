import React from 'react';

import '../css/Input.css';

const Input = (props) => {
  return (
    <div>
      <input type={props.type} placeholder={props.text} className={props.inputStyle} name={props.name} />
    </div>
  )
}

export default Input
