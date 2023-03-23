export function timeCounter(createdAt) {
  const now = new Date()
  const targetDate = new Date(createdAt)
  const timeDiff = targetDate.getTime() - now.getTime()
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return -hours
}

export function passwordCheck(passwork, confirmPassword) {
	
	return null
}