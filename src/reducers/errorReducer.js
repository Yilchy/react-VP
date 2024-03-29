import { GET_ERRORS, SET_NO_ERRORS } from "../actions/types";

const initialState = {};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case SET_NO_ERRORS:
      return {};
    default:
      return state;
  }
};
