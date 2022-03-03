import { v4 as uuidv4 } from "uuid";
import { CURRENT_USER, ALL_USERS } from "../constants/user";
const handleError = (message = "") => {
  return { status: false, message };
};
const handleSuccess = (message = "", data = null) => {
  return { status: true, message, data };
};

// register new user
export const registerUserService = (payload) => {
  if (!payload) {
    return handleError("invalid inputs");
  }
  const { email, password, fullName } = payload;
  if (!email || !password || !fullName) {
    return handleError("invalid inputs");
  }
  // get all registered users
  let allUsers = localStorage.getItem(ALL_USERS);

  allUsers = JSON.parse(allUsers) || [];
  const userExists = allUsers?.find((user) => user.email === email);
  if (userExists) {
    return handleError("user already exists");
  }
  // create new user
  const newUser = { ...payload, id: uuidv4() };
  allUsers.push(newUser);
  localStorage.setItem(ALL_USERS, JSON.stringify(allUsers));
  return handleSuccess("register successfull");
};

// login user
export const loginUserService = (payload) => {
  let localUser = localStorage.getItem(CURRENT_USER);
  if (localUser) {
    localUser = JSON.parse(localUser);
    return handleSuccess("login successfull", localUser);
  }

  if (!payload) {
    return handleError("invalid inputs");
  }
  const { email, password } = payload;
  if (!email || !password) {
    return handleError("invalid inputs");
  }
  // get all registered users
  let allUsers = localStorage.getItem(ALL_USERS);
  allUsers = JSON.parse(allUsers) || [];

  const [user] = allUsers?.filter((user) => user.email === email);
  if (!user) {
    return handleError("user does not exist");
  }
  //   console.log("all usrers", user);

  if (user.password !== password) {
    return handleError("Invalid credentials");
  }
  // login success -  user
  localStorage.setItem(CURRENT_USER, JSON.stringify(user));
  return handleSuccess("login successfull", user);
};

// update user
export const updateAccountService = (payload) => {
  if (!payload) {
    return handleError("invalid inputs");
  }
  const { email, password } = payload;
  if (!email || !password) {
    return handleError("invalid inputs");
  }
  // get all registered users
  let allUsers = localStorage.getItem(ALL_USERS);
  allUsers = JSON.parse(allUsers) || [];

  let user = allUsers?.find((user) => user.id === payload.id); // current user
  if (!user) {
    return handleError("user does not exist");
  }
  const updatedUser = { ...user, ...payload };
  allUsers = allUsers.filter((user) => user.id !== payload.id); // get all registered users other than current users
  allUsers.push(updatedUser);
  localStorage.setItem(ALL_USERS, JSON.stringify(allUsers));
  localStorage.setItem(CURRENT_USER, JSON.stringify(updatedUser));

  return handleSuccess("update successfull", updatedUser);
};
// logout user
export const logoutUserService = (payload) => {
  if (!payload) {
    return handleError("invalid inputs");
  }
  const { id: userId } = payload;
  if (!userId) {
    return handleError("invalid user");
  }
  // get all registered users
  let allUsers = localStorage.getItem(ALL_USERS);
  allUsers = JSON.parse(allUsers) || [];

  const [user] = allUsers?.filter((user) => user.id === userId);
  if (!user) {
    return handleError("user does not exist");
  }
  // logout success -  user
  localStorage.removeItem(CURRENT_USER);
  sessionStorage.clear();
  return handleSuccess("logout successfull");
};

// delete user
export const deleteAccountService = (payload) => {
  if (!payload) {
    return handleError("invalid inputs");
  }
  const { id: userId } = payload;
  if (!userId) {
    return handleError("invalid user");
  }
  // get all registered users
  let allUsers = localStorage.getItem(ALL_USERS);
  allUsers = JSON.parse(allUsers) || [];

  const [user] = allUsers?.filter((user) => user.id === userId);
  if (!user) {
    return handleError("user does not exist");
  }

  // delete user success
  allUsers = allUsers.filter((user) => user.id !== userId);
  localStorage.setItem(ALL_USERS, JSON.stringify(allUsers));
  localStorage.removeItem(CURRENT_USER); // user deleted so logout

  return handleSuccess("deleting account successfull");
};
