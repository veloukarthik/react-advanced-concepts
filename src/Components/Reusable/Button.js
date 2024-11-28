import React from "react";
import PropTypes from "prop-types";
import "./Button.css"; // External CSS file for styles

const Button = ({ type = "button", variant = "primary", onClick, children, disabled = false }) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant}`} // Dynamically apply class based on variant
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// Prop type validation for better maintainability
Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "success"]),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
