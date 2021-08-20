import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormControl, Input, Button } from '@material-ui/core'

import Message from './message';

const ChatWindow = ({ getMessages, setContacts, sendMessage, deleteMessage, match: { params: { id: currentUserId } } }) => {
	const [input, setInput] = useState("")
	const toUser = useSelector(state => state.contacts && state.contacts.find((item) => item.id == currentUserId))
	const messages = useSelector(state => state.messages)
	const loggedInUserData = useSelector(state => state.loggedInUserData)

	useEffect(() => {
		if (loggedInUserData && loggedInUserData.uid) {
			const data = {
				uid: loggedInUserData.uid,
				reciever_id: currentUserId,
				client: localStorage.getItem('client'),
				access_token: localStorage.getItem("access_token")
			}
			getMessages(data)
			setContacts(data)
		}
	}, [loggedInUserData])

	const history = useHistory()
	useEffect(() => {
		const access_token = localStorage.getItem("access_token")
		if (!access_token) {
			history.push('/sign_in')
		}
	}, [])

	const handleSend = (e) => {
		e.preventDefault()
		const data = {
			body: input,
			reciever_id: toUser.id,
			sender_id: currentUserId,
			uid: loggedInUserData.uid,
			client: localStorage.getItem('client'),
			access_token: localStorage.getItem("access_token")
		}
		sendMessage(data)
		setTimeout(() => setInput(""), 100)
	}

	return (
		<div className="container w-50 h-100 bg-dark">

			<div className="flex-wrap ">
				<div className="py-2 bg-light pl-2 mb-2 fixed-top position-fixed top position-sticky form-control" >
					<h1>{toUser && toUser.full_name}</h1>
				</div>
				<div>
					{messages && messages.map(message =>
						<div className="container w-75 h-100">
							<Message message={message} currentUser={loggedInUserData} deleteMessage={deleteMessage} toUser={toUser} />
						</div>
					)}
				</div>
				<form onSubmit={handleSend} className="p-1 fixed-bottom position-fixed bottom position-sticky bg-white">
					<FormControl className=" fixed-bottom position-fixed bottom position-sticky form-control form-inline d-inline">
						<Input className="w-75" placeholder="enter message" value={input} onChange={(e) => setInput(e.target.value)} />
						<button type="submit" disabled={!input} className="btn btn-sm col-3 btn-dark" >Send</button>
					</FormControl>
				</form>
			</div>
		</div>
	)
}

export default ChatWindow