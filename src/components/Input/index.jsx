import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";

import "./styles.scss";

export default function Input({ iconLeft, name, ...rest }) {
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

  return (
    <div className="custom-input">
      {iconLeft}
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </div>
  );
}
