import {
  SET_USER,
  SET_RATING,
  SET_USERLIST
} from "../actions/types";
const initialState = {
  user: {},
  rating: 0,
  userlist: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USERLIST:
      return {
        ...state,
        userlist: action.payload,
      };
    case SET_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
