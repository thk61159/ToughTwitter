import axios from 'axios'
export const API_URL = 'https://twitter-api-03.herokuapp.com/api'
export const API_URL_BACKUP = 'https://secret-caverns-10798.herokuapp.com/api'
export const API_LOCAL = 'http://localhost:4000/api'
// export const MAX_ITEMS = 10
export const Myaxios = (token, api_id = 2) => {
	let apiURL = (api_id === 1) ? API_URL : API_URL_BACKUP
	return axios.create({
		baseURL: apiURL,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
}
