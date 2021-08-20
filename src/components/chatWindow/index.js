import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getMessages, sendMessage, deleteMessage, setContacts } from '../../redux/actions'
import ChatWindow from './ChatWindow';

const mapDispatchToProps = { getMessages, sendMessage, deleteMessage, setContacts }

export default withRouter(connect(null, mapDispatchToProps)(ChatWindow));
