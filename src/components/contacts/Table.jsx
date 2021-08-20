import React, { useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Table = ({ setContacts }) => {
  const contacts = useSelector(state => state.contacts)
  const loggedInUserData = useSelector(state => state.loggedInUserData)

  useEffect(() => {
    const client = localStorage.getItem('client')
    const access_token = localStorage.getItem("access_token")

    if (loggedInUserData) {
      const data = {
        client: client,
        uid: loggedInUserData.uid,
        access_token: access_token
      }
      setContacts(data)
    }
  }, [])


  const columns = [{
    dataField: 'full_name',
    text: 'Name'
  }, {
    dataField: 'email',
    text: 'Email'
  }, {
    dataField: '',
    formatter: (cell, row, index) =>
      <Link to={`/message/${row.id}`} className="fal fa-comment-smile text-decoration-none" ></Link>,
    text: 'Message'
  }];

  return (
    <div className="px-5 my-3 ">
      {contacts &&
        contacts.length
        ? <BootstrapTable keyField='id' data={contacts} columns={columns} />
        : null
      }
    </div>
  )
}


export default Table
