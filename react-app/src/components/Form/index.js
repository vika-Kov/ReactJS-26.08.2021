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

  // console.log(inputRef);

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form_box">
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
      </div>
      <div className="form_box">
        <Button
          variant="contained"
          size="large"
          color="secondary"
          type="submit"
        >
          Send message
        </Button>
      </div>
    </form>
  );
};
