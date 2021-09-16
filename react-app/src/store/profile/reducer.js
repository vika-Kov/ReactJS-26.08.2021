import { TOGGLE_SHOW_NAME, TOGGLE_CHECKBOX, CHANGE_NAME } from "./actions";

const initialState = {
  showName: false,
  toggleCheckbox: true,
  name:"default"
};

export const profileReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case TOGGLE_SHOW_NAME: {
      return {
        ...state,
        showName: !state.showName,
      };
    }
    case TOGGLE_CHECKBOX: {
      return {
        ...state,
        toggleCheckbox: !state.toggleCheckbox,
      };
    }
    case CHANGE_NAME: {
      return {
        ...state,
        name: payload,
      };
    }
    default:
      return state;
  }
};
