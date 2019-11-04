import { SET_LIGHT_STATE } from "../actions/actionTypes";

const filtersReducerDefaultState = {
  checked: false
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_LIGHT_STATE:
      return {
        ...state,
        checked: !state.checked
      };
    default:
      return state;
  }
};
