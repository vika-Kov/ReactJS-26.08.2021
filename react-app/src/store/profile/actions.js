export const TOGGLE_SHOW_NAME = "PROFILE::TOGGLE_SHOW_NAME";
export const TOGGLE_CHECKBOX = "PROFILE::TOGGLE_CHECKBOX";
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const toggleShowName = {
  type: TOGGLE_SHOW_NAME,
};

export const toggleCheckbox = {
  type: TOGGLE_CHECKBOX,
};

export const changeName = (name) => ({
  type: CHANGE_NAME,
  payload: name,
});