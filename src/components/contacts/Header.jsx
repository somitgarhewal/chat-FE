import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setLogOut } from '../../redux/actions'

const Header = ({ data }) => {

  const history = useHistory()
  const access_token = localStorage.getItem('access_token')
  const client = localStorage.getItem('client')
  const dispatch = useDispatch()
  const handleSignOut = () => {
    const signOutData = {
      uid: data.uid,
      access_token,
      client
    }

    dispatch(setLogOut(signOutData))
      .then((res) => {
        if (res && res.success) {
          history.push('/sign_in')
        }
      })
  }

  return (
    <div className="row d-flex justify-content-between">
      {data &&
        <h3 className="col">
          {`Hi ${data.first_name}`}
        </h3>
      }
      <a className="col-1 px-3 text-primary" role='button' onClick={() => handleSignOut()}>LogOut</a>
    </div>
  )
}

export default Header
