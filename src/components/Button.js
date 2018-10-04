import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

const Button = (props) => (
  <button type="button" {...props} className={cn('btn', props.className)} />
);

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
