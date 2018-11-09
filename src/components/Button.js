import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

const Button = ({ classes, ...rest}) => (
  <button type="button" className={cn('btn', classes)} {...rest} />
);

Button.propTypes = {
  classes: PropTypes.string,
};

export default Button;
