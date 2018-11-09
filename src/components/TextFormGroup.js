import React from 'react';
import cn from 'classnames';

const TextFormGroup = ({ classes, id, inputRef,  label, name, ...rest}) => (
  <div className={cn('form-group', classes)}>
    <label htmlFor={name}>{label}</label>
    <input
      id={id || name}
      className="text-field"
      name={name}
      type="text"
      ref={inputRef}
      {...rest}
    />
  </div>
);

export default TextFormGroup;
