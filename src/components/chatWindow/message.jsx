import React, { useRef, useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import DeleteMessageModal from './DeleteMessageModal'

const Message = ({ currentUser, message, deleteMessage, toUser }) => {
	const [open, setOpen] = useState(false)
	const divRef = useRef()

	useEffect(() => {
		divRef.current.scrollIntoView({ behavior: 'smooth' });
	}, [])

	const handleDeleteMessage = (e) => {
		handleDeleteMessageToggle()
	}

	const handleDeleteMessageToggle = () => {
		if (currentUser.id === message.reciever_id) return
		setOpen(!open)
	}

	const handleDeleteMessageSubmit = () => {
		const data = {
			uid: currentUser.uid,
			messageId: message.id,
			reciever_id: toUser.id,
			client: localStorage.getItem('client'),
			access_token: localStorage.getItem("access_token")
		}
		deleteMessage(data)
			.then((res) => {
				if (res && res.status === 'success') {
					handleDeleteMessageToggle()
				}
			})
	}

	return (
		<>
			{
				message && <div className={`container w-full d-flex ${currentUser.id === message.reciever_id ? 'float-left' : 'justify-content-end'}`}>
					<Card
						className={`d-inline-flex m-1 px-2 p-1 `}
						onClick={(e) => handleDeleteMessage(e)}
					>
						<Tooltip title={new Date(message.created_at).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}>
							<CardContent className="p-0 m-0">
								<Typography >
									{message.body}
									<div ref={divRef} />
								</Typography>
							</CardContent>
						</Tooltip>
					</Card>
				</div>
			}

			<DeleteMessageModal
				open={open}
				toggle={handleDeleteMessageToggle}
				onSubmit={handleDeleteMessageSubmit}
				submitButtonName={"Delete"}
			/>
		</>
	)
}
export default Message