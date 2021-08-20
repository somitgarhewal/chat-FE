import { getUsersHandler } from "./getUsers";
import { createReducer } from "../../core/reduxUtils";

const initialState = {
  pages: [],
  loggedInUserData: {}
}

const handlers = {
  ...getUsersHandler,
};

const userReducer = createReducer(initialState, handlers);

export default userReducer;