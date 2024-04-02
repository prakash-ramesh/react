import React from "react";

const ChkRadio = ({ label, id, error, fields, type, ...props }) => {
  const input = fields?.map((field) => (
    <div className="me-3 chkRadio" key={field.value}>
      <input
        id={field.value}
        className="form-check-input m-1"
        {...props}
        value={field.value}
        type={type}
        name={id}
      />
      <label htmlFor={field.value} className="form-check-label text-info">{field.label}</label>
    </div>
  ));

  return (
    <fieldset className={`mt-3 mb-3 ${error ? "is-invalid" : ""}`}>
      <label htmlFor={id} className="me-3">{label}</label>
      <fieldset>{input}</fieldset>
      {error && (
        <span id={`${id}-error`} className="text-danger">
          {error}
        </span>
      )}
    </fieldset>
  );
};

export default ChkRadio;
