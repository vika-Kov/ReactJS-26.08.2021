import { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "../../utils/ThemeContext";

import { toggleCheckbox, toggleShowName,changeName } from "../../store/profile/actions";
import Checkbox from "@material-ui/core/Checkbox";

const withContext = (Component) => {
  return (props) => {
    const theme = useContext(ThemeContext);

    return <Component {...props} theme={theme} />;
  };
};

export const Profile = ({ theme }) => {
  const [value, setValue] = useState("");
  const name = useSelector((state) => state.name);
  const showName = useSelector((state) => state.showName);
  const toggleChkbx = useSelector((state) => state.toggleCheckbox);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleShowName);
    console.log("Toggle show name dispatched");
    console.log(showName);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeName(value));
    setValue('');
  };

  const handleChange = (e) => {
    dispatch(toggleCheckbox);
    console.log("Toggle checkbox dispatched");
    console.log(toggleChkbx);
    setValue(e.target.value);
  };

  return (
    <>
      {/* <button onClick={theme.changeTheme}>Toggle theme</button> */}
      <button onClick={handleClick}>Toggle show name</button>
      <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Submit</button>
      </form>
      <Checkbox
        checked={toggleChkbx}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />

      {showName && <div>{name}</div>}

      <h3 style={{ color: theme.theme === "light" ? "red" : "black" }}>
        This is profile page
      </h3>
    </>
  );
};

export const ThemedProfile = withContext(Profile);

