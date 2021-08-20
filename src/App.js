import react, { useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import Login from "./components/users/Login";
import SignUp from "./components/users/Signup";
import Table from "./components/contacts";
import ChatWindow from "./components/chatWindow";
import { setCurrentUserAndHeaders } from './redux/actions'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCurrentUserAndHeaders({
      loggedInUserData: JSON.parse(localStorage.getItem("loggedInUserData")),
      access_token: localStorage.getItem("access_token"),
      client: localStorage.getItem("client")
    }))
  }, [])

  return (
    <>
      <Switch>
        <Route path="/contacts" component={Table} />
        <Route path="/message/:id" component={ChatWindow} />
        <Route path="/sign_in" component={Login} />
        <Route path="/sign_up" component={SignUp} />
      </Switch>

    </>
  );
}

export default App;
