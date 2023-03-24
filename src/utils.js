
export function timeCounter(createdAt) {
  const now = new Date()
  const targetDate = new Date(createdAt)
  const timeDiff = targetDate.getTime() - now.getTime()
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return -hours
}
export function formChange(form, user) {
	for (let key in form) {
		user.password = ''
		if (form[key] !== user[key]) return true
	}
	return false
}

export function passwordVertify(password) {
  const regExp = new RegExp(
		'^(?=.*[a-z])(?=.*[0-9])(?=.{4,12})'
	)
  return regExp.test(password)
}
