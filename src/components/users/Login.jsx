import React, { useState, useEffect } from 'react';
import { setLoginUser } from '../../redux/actions'
import { withRouter, Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";


const Login = ({ setLoginUser }) => {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: userId,
      password
    }

    setLoginUser(user).then((res) => {
      if (res && res.success) {
        history.push('./contacts')
      }
    })
  };
  useEffect(() => {
    const access_token = localStorage.getItem("access_token")
    if (access_token) {
      history.push('/contacts')
    }
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-6">
          <div className="card mt-5">
            <h1 className="text-center">Login</h1>
            <form>
              <div className="form-row">
                <div className="form-group col-md-12 p-4">
                  <label>userId</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userId}
                    placeholder="userId"
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12 p-4">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    placeholder="xxxxxx"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row ">
                <div className="col text-center">
                  <div onClick={(e) => handleSubmit(e)}>
                    <div className="btn btn-primary">Login</div>
                  </div>
                </div>
              </div>
              <div className="form-group row ">
                <div className="col d-flex px-5 justify-content-end">
                  <Link to='/sign_up' className='pe-auto text-decoration-none'>
                    Don't have account Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-3">
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = { setLoginUser }

export default withRouter(connect(null, mapDispatchToProps)(Login));