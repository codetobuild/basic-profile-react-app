import * as types from "../constants/actionTypes";

const initialState = {};

const registerUser = (payload) => {};
const loginUser = (payload) => {};
const logoutUser = (payload) => {};
const updateAccount = (payload) => {};
const deleteAccount = (payload) => {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER:
      return registerUser(action.payload);
    case types.LOGIN:
      return loginUser(action.payload);
    case types.LOGOUT:
      return logoutUser(action.payload);
    case types.UPDATE_ACCOUNT:
      return updateAccount(action.payload);
    case types.DELETE_ACCOUNT:
      return deleteAccount(action.payload);
    default:
      return state;
  }
};
