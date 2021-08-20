import * as constants from "../constants";

const setLoginUser = (state, action) => {
  localStorage.setItem("loggedInUserData", JSON.stringify(action.payload.data.data));
  localStorage.setItem("access_token", action.payload.headers['access-token']);
  localStorage.setItem("client", action.payload.headers.client);

  return {
    ...state,
    error: null,
    loggedInUserData: action.payload.data.data,
    access_token: action.payload.headers['access-token'],
    client: action.payload.headers.client
  };
}

const setCurrentUserAndHeaders = (state, action) => {
  return {
    ...state,
    error: null,
    loggedInUserData: action.payload.loggedInUserData,
    access_token: action.payload.access_token,
    client: action.payload.client
  };
}

const setLogOut = (state, action) => {
  localStorage.removeItem("loggedInUserData");
  localStorage.removeItem("access_token");
  localStorage.removeItem("client");
  return {
    ...state,
    error: null,
    loggedInUserData: null,
  };
}

const getContacts = (state, action) => {
  return {
    ...state,
    error: null,
    contacts: action.payload
  };
}

const getMessages = (state, action) => {
  return {
    ...state,
    error: null,
    messages: action.payload
  }
}

export const getUsersHandler = {
  [constants.SET_LOGIN_USER]: setLoginUser,
  [constants.SET_CONTACTS]: getContacts,
  [constants.SET_MESSAGES]: getMessages,
  [constants.SET_CURRENT_USER_AND_HEADER]: setCurrentUserAndHeaders,
  [constants.SET_LOGOUT_USER]: setLogOut
}
