import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({
  label,
  type,
  handleClick,
  children,
  style,
  className,
  id,
  disabled
}) => {
  return (
    <button
      id={id}
      style={style}
      disabled={disabled}
      type={type}
      onClick={handleClick}
      className={className}
    >
      { children || label }
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.string,
    outline: PropTypes.string,
  }),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
};

Button.defaultProps = {
  label: '',
  children: null,
  style: null,
  type: '',
  disabled: false,
  className: '',
  id: '',
  handleClick: () => {},
};

export default Button;

