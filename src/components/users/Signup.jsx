import React, { useState, useEffect } from 'react';
import { setSignUpUser } from '../../redux/actions'
import { withRouter, Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const SignUp = ({ setSignUpUser }) => {
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      first_name: fName,
      last_name: lName,
      email: email,
      password
    }
    setSignUpUser(user)
      .then((res) => {
        if (res && res.success) {
          history.push('./contacts')
        }
      })
  };
  const history = useHistory()

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
            <h1 className="text-center">Sign Up</h1>
            <form>
              <div className="form-row">
                <div className="form-group col-md-12 p-4">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={fName}
                    placeholder="First Name"
                    onChange={(e) => setFName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12 p-4">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lName}
                    placeholder="Last Name"
                    onChange={(e) => setLName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12 p-4">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    placeholder="email@email.com"
                    onChange={(e) => setEmail(e.target.value)}
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
                    <div className="btn btn-primary">Sign Up</div>
                  </div>
                </div>
              </div>
              <div className="form-group row ">
                <div className="col d-flex px-5 justify-content-end">
                  <Link to='/sign_in' className='pe-auto text-decoration-none'>
                    Already have account Sign In
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

const mapDispatchToProps = { setSignUpUser }

export default withRouter(connect(null, mapDispatchToProps)(SignUp));