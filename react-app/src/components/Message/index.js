import React from "react";

export const Message = ({ text, author, onClick, id }) => {
  return (
    <div>
      Author: <b>{author}</b>; Message: {text}
    </div>
  );
};
