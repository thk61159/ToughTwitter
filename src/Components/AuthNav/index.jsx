import React, { useEffect, useContext } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

import MyContext from '../../Components/MyContext'
import { Myaxios } from '../../constants'
import { takeErrMsg } from '../../utils'

function AuthNav() {
	const { userData, updateUserData } = useContext(MyContext)
	const token = userData ? userData.token : ''
	const localToken = localStorage.getItem('token') //測試過可以取出
	const location = useLocation()
	const path = location.pathname
	const navigate = useNavigate()
	const dirHome = ['/', '/login', 'register','test']
	useEffect(() => {
		if (token) {
			if (dirHome.includes(location.pathname)) return navigate('home')
			navigate(location.pathname)
		} else {
			Myaxios(localToken)
				.post('/users/test-token')
				.then(e => {
					// console.log(e.data)
					const  VerifiedUser  = e.data
					VerifiedUser.currentUser = true
					console.log('localToken驗證', e.status)
					if (e.status === 200) {
						updateUserData({ token: localToken, user: VerifiedUser })

						if (dirHome.includes(location.pathname)) return navigate('home')
						navigate(location.pathname)
					}
				})
				.catch(err => {
					console.error(takeErrMsg(err))
					if (dirHome.includes(location.pathname)) return navigate(location.pathname)
					updateUserData('')
					navigate('/login')
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
