import * as types from "../constants/actionTypes";

const initialState = {
  isAuthed: false,
  isLoggedIn: false,
  loading: false,
  error: null,
  profile: null,
};

const setLoading = (state, payload) => {
  return { ...state, loading: payload.loading };
};
const registerUser = (state, payload) => {
  return state;
};

const loginUser = (state, payload) => {
  return {
    ...state,
    isAuthed: payload.isAuthed || false,
    isLoggedIn: payload.isLoggedIn || false,
    profile: { ...payload.profile },
  };
};

const logoutUser = (state, payload) => {
  return {
    ...state,
    ...initialState,
  };
};
const updateAccount = (state, payload) => {
  return { ...state, profile: { ...payload.profile } };
};
const deleteAccount = (state, payload) => {
  return {
    ...state,
    ...initialState,
  };
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return setLoading(state, action.payload);
    case types.REGISTER:
      return registerUser(state, action.payload);
    case types.LOGIN:
      return loginUser(state, action.payload);
    case types.LOGOUT:
      return logoutUser(state, action.payload);
    case types.UPDATE_ACCOUNT:
      return updateAccount(state, action.payload);
    case types.DELETE_ACCOUNT:
      return deleteAccount(state, action.payload);
    default:
      return state;
  }
};
