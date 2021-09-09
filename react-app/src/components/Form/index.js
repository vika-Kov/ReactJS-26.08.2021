import React, { useState, useRef, useCallback } from "react";
import { TextField, Button } from "@material-ui/core";
// import { Button } from "../Button";

export const Form = ({ onSubmit }) => {
  const inputRef = useRef(null);

  const [value, setValue] = useState("");

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");

    inputRef.current.focus();
  };

  console.log(inputRef);

  return (
    <form onSubmit={handleSubmit}>
      {/*<TextField*/}
      {/*  placeholder="message"*/}
      {/*  label="Label"*/}
      {/*  value={value}*/}
      {/*  onChange={handleChange}*/}
      {/*  inputRef={inputRef}*/}
      {/*/>*/}
      <TextField
        id="outlined-basic"
        autoFocus
        placeholder="message"
        label="Your text"
        variant="outlined"
        value={value}
        onChange={handleChange}
        inputRef={inputRef}
      />

      <Button variant="contained" color="secondary" type="submit">
        Send message
      </Button>
    </form>
  );
};
