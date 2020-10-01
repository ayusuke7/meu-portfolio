import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";

import "./styles.scss";

export const TextField = ({ iconLeft, ...props }) => {
  return (
    <div className="custom-input">
      {iconLeft}
      <input {...props} />
    </div>
  );
};

export default function InputField({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      error: error,
    });
  }, [error, fieldName, registerField]);

  return <TextField ref={inputRef} defaultValue={defaultValue} {...rest} />;
}
