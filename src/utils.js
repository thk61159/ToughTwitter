import axios from 'axios'
export const Myaxios = (token, api_id = 1) => {
	let apiURL = process.env.REACT_APP_TWITTER_API
	return axios.create({
		baseURL: apiURL + '/api',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
}
export function timeCounter(createdAt) {
	const now = new Date()
	const targetDate = new Date(createdAt)
	const timeDiff = (now.getTime() - targetDate.getTime()) / 1000
	if (timeDiff < 60) return `${Math.floor(timeDiff)}秒前`
	if (timeDiff < 60 * 60) return `${Math.floor(timeDiff / 60)}分鐘前`
	if (timeDiff < 60 * 60 * 24) return `${Math.floor(timeDiff / (60 * 60))}小時前`
	if (timeDiff >= 60 * 60 * 24) return `${Math.floor(timeDiff / (60 * 60 * 24))}天前`
}
export function formChange(form, user) {
	for (let key in form) {
		user.password = ''
		if (form[key] !== user[key]) return true
	}
	return false
}

export function passwordVertify(password) {
	const regExp = new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.{4,12})')
	return regExp.test(password)
}

export function timestamp(time) {
	const date = new Date(time)
	const year = date.getFullYear()
	const month = (date.getMonth() + 1).toString().padStart(2, '0')
	const day = date.getDate().toString().padStart(2, '0')
	const hour = date.getHours().toString().padStart(2, '0')
	const minute = date.getMinutes().toString().padStart(2, '0')
	const second = date.getSeconds().toString().padStart(2, '0')
	const hourPMAM = hour > 12 ? `下午 ${hour - 12}` : `上午 ${hour}`

	return `${hourPMAM}:${minute}:${second}•${year}年${month}月${day}日`
}

export function findPath(path, place) {
	let pathArray = path.split('/')
	return pathArray[pathArray?.length - place]
}
export function findExtName(filemane) {
	const temp = filemane.split('.')
	return temp[temp?.length - 1]
}
export function takeErrMsg(err) {
	const temp = err.response.data.message?.split(':')
	return temp || err.response
}
