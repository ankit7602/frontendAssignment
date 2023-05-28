import React, { forwardRef } from "react";

const FormInput = forwardRef(
  ({ name, id, type, label, className, defaultValue, val, value, labelPosition, ...props }, ref) => {
    return (
      <React.Fragment>
                  <label className="animLabelTop" htmlFor={id}>
              {label}
            </label>
      <div className="form-group">

              <input
                type={type}
                className={`form-control ${className}`}
                id={id}
                ref={ref}
                name={name}
                value={value}
                defaultValue={defaultValue}
                placeholder=" "
                {...props}
              />
              </div>
         </React.Fragment>
    );
  }
);
export default FormInput;
