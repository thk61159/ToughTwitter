import React, { useEffect, useContext } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

import MyContext from '../../Components/MyContext'
import { Myaxios } from '../../constants'
import { takeErrMsg } from '../../utils'

function AuthNav() {
	const { userData, updateUserData } = useContext(MyContext)
	const token = userData ? userData.token : null
	const localToken = localStorage.getItem('token') //測試過可以取出
	const location = useLocation()
	const path = location.pathname
	const navigate = useNavigate()
	const dirHome = ['/', '/login', 'register']
	useEffect(() => {
		if (token) {
			if (dirHome.includes(location.pathname)) return navigate('home')
			navigate(location.pathname)
		} else {
			Myaxios(localToken)
				.post('/users/test-token')
				.then(e => {
					const { user } = e.data
					user.currentUser = true
					console.log('localToken驗證', e.status)
					if (e.status === 200) {
						updateUserData({ token: localToken, user })

						if (dirHome.includes(location.pathname)) return navigate('home')
						navigate(location.pathname)
					}
				})
				.catch(err => {
					console.error(takeErrMsg(err))
					updateUserData(null)
					if (path === '/admin') {
						navigate('/admin')
					} else if (path === '/register') {
						navigate('/register')
					} else {
						navigate('/login')
					}
				})
		}
	}, [path])

	return (
		<>
			<div>
				<Outlet />
			</div>
		</>
	)
}

export default AuthNav
