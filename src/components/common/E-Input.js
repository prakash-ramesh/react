import React, { forwardRef } from "react";

const Input = forwardRef(({ label, id, error, ...props }, ref) => {
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={`form-control form-control-sm m-1 input ${error ? 'is-invalid' : ''}`}
        {...props}
        ref={ref}
      />
      {error && <span id={`${id}-error`} className="invalid-feedback">{error}</span>}
    </fieldset>
  );
});

export default Input;
