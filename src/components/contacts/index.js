import Contacts from './Contacts'
import { setContacts } from '../../redux/actions'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapDispatchToProps = { setContacts }

export default withRouter(connect(null, mapDispatchToProps)(Contacts));
