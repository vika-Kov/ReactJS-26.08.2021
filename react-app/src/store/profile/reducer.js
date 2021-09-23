import { TOGGLE_SHOW_NAME, TOGGLE_CHECKBOX } from "./actions";

const initialState = {
  showName: false,
  toggleCheckbox: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
