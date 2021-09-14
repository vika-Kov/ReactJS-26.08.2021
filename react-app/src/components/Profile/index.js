import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "../../utils/ThemeContext";
import { store } from "../../store";
import { toggleCheckbox, toggleShowName } from "../../store/profile/actions";
import Checkbox from "@material-ui/core/Checkbox";

const withContext = (Component) => {
  return (props) => {
    const theme = useContext(ThemeContext);

    return <Component {...props} theme={theme} />;
  };
};

export const Profile = ({ theme }) => {
  const showName = useSelector((state) => state.showName);
  const toggleChkbx = useSelector((state) => state.toggleCheckbox);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleShowName);
    console.log("Toggle show name dispatched");
    console.log(showName);
  };

  const handleChange = () => {
    dispatch(toggleCheckbox);
    console.log("Toggle checkbox dispatched");
    console.log(toggleChkbx);
  };

  return (
    <>
      <button onClick={theme.changeTheme}>Toggle theme</button>
      <button onClick={handleClick}>Toggle show name</button>
      <Checkbox
        checked={toggleChkbx}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />

      {showName && <div>Show name is true</div>}

      <h3 style={{ color: theme.theme === "light" ? "red" : "black" }}>
        This is profile page
      </h3>
    </>
  );
};

export const ThemedProfile = withContext(Profile);

// HOF

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

const withLogger = (fn) => {
  return (...args) => {
    console.log(args);
    fn(...args);
  };
};

const addWithLogger = withLogger(add);
const subWithLogger = withLogger(sub);
const mulWithLogger = withLogger(mul);
