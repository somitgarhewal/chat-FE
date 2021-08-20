import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Table from './Table'
import Header from './Header'

const Contacts = ({ setContacts }) => {

  const loggedInUserData = useSelector(state => state.loggedInUserData)
  const history = useHistory()

  useEffect(() => {
    const access_token = localStorage.getItem("access_token")
    if (!access_token) {
      history.push('/sign_in')
    }
  }, [])

  return (
    <div>
      <Header data={loggedInUserData} />
      <Table setContacts={setContacts} />
    </div>
  )
}

export default Contacts
