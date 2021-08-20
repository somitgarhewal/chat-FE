import axios from "axios";
import * as actions from './actionCreators'

const api = `http://www.localhost:3002/`

export const setLoginUser = (user) => dispatch => {
  return axios.post(`${api}users/sign_in`, user)
    .then((res) => {
      dispatch(actions.setLoginUser(res))
      return { success: true }
    })
    .catch((error) => {
      console.log('Login error', error)
      alert("Invalid Credentials")
    })
}

export const setSignUpUser = (user) => dispatch => {
  return axios.post(`${api}users`, user)
    .then((res) => {
      dispatch(actions.setLoginUser(res))
      return { success: true }
    })
    .catch((error) => {
      console.log('Sign up error', error)
      alert(error)
    })
}

export const setContacts = (data) => dispatch => {
  return axios.get(`${api}users/list?access-token=${data.access_token}&client=${data.client}&uid=${data.uid}`)
    .then((res) => {
      dispatch(actions.setContacts(res.data))
    })
    .catch((error) => console.log(error))
}

export const setLogOut = (data) => dispatch => {
  return axios.delete(`${api}users/sign_out?access-token=${data.access_token}&client=${data.client}&uid=${data.uid}`)
    .then((res) => {
      dispatch(actions.setLogOut(res.data))
      return { success: true }
    })
    .catch((error) => console.log(error))
}

export const getMessages = (data) => dispatch => {
  return axios.get(`${api}messages?reciever_id=${data.reciever_id}&access-token=${data.access_token}&client=${data.client}&uid=${data.uid}`)
    .then((res) => {
      dispatch(actions.setMessages(res.data))
    })
    .catch((error) => console.log(error))
}

export const sendMessage = (data) => dispatch => {
  return axios.post(`${api}messages?access-token=${data.access_token}`, data)
    .then((res) => {
      dispatch(getMessages(data))
    })
    .catch((error) => console.log(error))
}

export const deleteMessage = (data) => dispatch => {
  return axios.delete(`${api}messages/${data.messageId}?access-token=${data.access_token}&client=${data.client}&uid=${data.uid}`)
    .then((res) => {
      dispatch(getMessages(data))
      return { status: 'success' }
    })
    .catch((error) => console.log(error))
}
