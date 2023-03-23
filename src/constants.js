import axios from 'axios'
export const API_URL = 'https://twitter-api-03.herokuapp.com/api'
// export const MAX_ITEMS = 10
export const Myaxios = token =>
	axios.create({
		baseURL: API_URL,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
