import { SET_LOGIN_USER, SET_CONTACTS, SET_MESSAGES, SET_CURRENT_USER_AND_HEADER, SET_LOGOUT_USER } from '../constants'
export const setLoginUser = (data) => ({ type: SET_LOGIN_USER, payload: data })
export const setContacts = (data) => ({ type: SET_CONTACTS, payload: data })
export const setMessages = (data) => ({ type: SET_MESSAGES, payload: data })
export const setCurrentUserAndHeaders = (data) => ({ type: SET_CURRENT_USER_AND_HEADER, payload: data })
export const setLogOut = (data) => ({ type: SET_LOGOUT_USER, payload: data })