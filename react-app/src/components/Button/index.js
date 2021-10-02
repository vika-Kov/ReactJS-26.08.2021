import React from "react";
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import { useContext } from "react";
import './styles.css';
// import { ThemeContext } from "../../utils/ThemeContext";

export const Button = ({ children, onClick }) => {
  // const contextValue = useContext(ThemeContext);
  console.log('render button');
  return (
    <div
      // className={`my-button ${
      //   contextValue.theme === "light" ? "button-light" : "button-dark"
      // }`}
      // role="button"
      // onClick={onclick}
      className='my-button'
      role="button"
      onClick={onClick}
    >
      {children}
    </div>
  );
};