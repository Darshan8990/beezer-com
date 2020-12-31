import { SET_USER, SET_RATING, SET_USERLIST } from "./types";


export const setuser = (userdetails) => {
  return {
    type: SET_USER,
    payload: userdetails,
  };
};
export const setuserlist = (userlist) => {
  return {
    type: SET_USERLIST,
    payload: userlist,
  };
};

export const setrating = (rating) => {
  return {
    type: SET_RATING,
    payload: rating,
  };
};

