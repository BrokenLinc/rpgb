import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

const Button = (props) => {
  const { color, outline } = props;
  const classes = cn(
    'btn',
    { 'is-outline': outline },
    { [`is-${color}`]: color },
    'min-w-8r'
  );
  return (
    <button type="button" {...props} className={classes} />
  );
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  outline: PropTypes.bool,
};

export default Button;
