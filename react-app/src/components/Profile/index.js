import { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "../../utils/ThemeContext";

// import { toggleCheckbox,changeName } from "../../store/profile/actions";
// import Checkbox from "@material-ui/core/Checkbox";
// import { store } from "../../store";
import { ref, set, onValue } from "firebase/database";
import { db } from "../../services/firebase";


const withContext = (Component) => {
  return (props) => {
    const theme = useContext(ThemeContext);

    return <Component {...props} theme={theme} />;
  };
};

export const Profile = ({ theme, onLogout }) => {
  // const toggleChkbx = useSelector((state) => state.toggleCheckbox);

  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const showName = useSelector((state) => state.showName);
  const dispatch = useDispatch();

  const handleClick = () => {
    onLogout();
  };

  useEffect(() => {
    const userDbRef = ref(db, "user");
    onValue(userDbRef, (snapshot) => {
      const data = snapshot.val();
      console.log('--------', data);
      setName(data?.username || '');
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
    set(ref(db, "user"), {
      username: value,
    });

  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // const handleChange = (e) => {
  //   dispatch(toggleCheckbox);
  //   console.log("Toggle checkbox dispatched");
  //   console.log(toggleChkbx);
  //   setValue(e.target.value);
  // };

  return (
    <>
      {/* <button onClick={theme.changeTheme}>Toggle theme</button> */}
      <button onClick={handleClick}>Logout</button>
      <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Submit</button>
      </form>
      {/* <Checkbox
        checked={toggleChkbx}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      /> */}

      {showName && <div>{name}</div>}

      <h3 style={{ color: theme.theme === "light" ? "red" : "black" }}>
        This is profile page
      </h3>
    </>
  );
};

export const ThemedProfile = withContext(Profile);

