import axios from 'axios';
import store from './store'

export const setupAxiosInterceptors = () => {
	const onRequestSuccess = request => {
		const token = localStorage.getItem('access_token')
		const email = localStorage.getItem('access_email')
		const { su: { userEmail } } = store.getState()
		if (token) {
			request.headers = {
				"X-Auth-Key": email,
				"X-Auth-Secret": token,
			}
		}
		if (userEmail) Object.assign(request.headers, { 'X-SWITCH-USER': userEmail })

		return request
	}
	axios.interceptors.request.use(onRequestSuccess);
}
