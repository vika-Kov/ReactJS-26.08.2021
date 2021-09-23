import React from "react";

export const Message = ({ text, author}) => {
  return (
    <div>
      Author: <b>{author}</b>; Message: {text}
    </div>
  );
};
