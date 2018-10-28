import React from 'react';

const TextFormGroup = ({ label, name, ...rest}) => (
  <div>
    <label htmlFor={name} className="d-block">{label}</label>
    <input
      id={name}
      className="d-block"
      name={name}
      type="text"
      {...rest}
    />
  </div>
);

export default TextFormGroup;
