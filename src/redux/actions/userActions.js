import axios from "axios";
import * as types from "../constants/actionTypes";
import {
  registerUserService,
  loginUserService,
  logoutUserService,
  deleteAccountService,
  updateAccountService,
} from "../../services/user.service";
const loadingStarted = () => ({
  type: types.LOADING,
  payload: { loading: true },
});

const loadingEnded = () => ({
  type: types.LOADING,
  payload: { loading: false },
});

const loginAction = ({ data }) => {
  return {
    type: types.LOGIN,
    payload: {
      isLoggedIn: true,
      isAuthed: true,
      profile: data,
    },
  };
};

const logoutAction = () => {
  return {
    type: types.LOGOUT,
    payload: null,
  };
};
const updateAction = (data) => {
  return {
    type: types.UPDATE_ACCOUNT,
    payload: { profile: { ...data.data } },
  };
};

const deleteAction = () => {
  return {
    type: types.DELETE_ACCOUNT,
    payload: null,
  };
};

export const registerUser = (payload = {}) => {
  return async (dispatch) => {
    dispatch(loadingStarted());
    console.log("registering.....action");
    try {
      const data = await registerUserService(payload);
      console.log("data,", data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginUser = (payload = {}) => {
  return async (dispatch) => {
    dispatch(loadingStarted());
    console.log("login.....action");
    try {
      const data = await loginUserService(payload);
      console.log("data,", data);
      if (data?.status) {
        dispatch(loginAction(data)); // update redux profile after login success
      } else {
        throw new Error(data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const logoutUser = (payload = {}) => {
  return async (dispatch, getState) => {
    dispatch(loadingStarted());
    console.log("logout.....action");
    try {
      const currentUser = getState().user;
      const data = await logoutUserService({ ...currentUser.profile });
      console.log(data);
      if (data?.status) {
        dispatch(logoutAction()); // update redux profile after logout success
      } else {
        throw new Error(data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateAccount = (payload = {}) => {
  return async (dispatch, getState) => {
    dispatch(loadingStarted());
    console.log("logout.....action");
    try {
      // const currentUser = getState().user;
      const data = await updateAccountService(payload);
      console.log(data);
      if (data?.status) {
        dispatch(updateAction(data)); // update redux profile after logout success
      } else {
        throw new Error(data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteAccount = (payload = {}) => {
  return async (dispatch, getState) => {
    dispatch(loadingStarted());
    console.log("logout.....action");
    try {
      const currentUser = getState().user;
      const data = await deleteAccountService({ ...currentUser.profile });
      console.log(data);
      if (data?.status) {
        dispatch(deleteAction()); // update redux profile after delete success
      } else {
        throw new Error(data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
};
