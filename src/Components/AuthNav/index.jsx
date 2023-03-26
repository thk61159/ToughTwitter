import React, { useEffect, useContext } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

import MyContext from '../../Components/MyContext'
import { Myaxios } from '../../constants'

function AuthNav({ userData, setUserData }) {
	const localToken = localStorage.getItem('token') //測試過可以取出
	const { token } = MyContext
	const location = useLocation()
	const navigate = useNavigate()
	useEffect(() => {
		if (token) return navigate(location.pathname)
		if (!localToken) return navigate('/login')
			Myaxios(localToken)
				.post('/users/test-token')
				.then(e => {
					console.log('localToken驗證', e.status)
					if (e.status === 200) {
						setUserData({ token: localToken, user: e.data })
						//用正則比較好但不會
						const dirHome = ['/', '/login', 'register']
						if (dirHome.includes(location.pathname)) return navigate('home')
						navigate(location.pathname)
					}
				})
				.catch(err => {
					console.log(err)
					setUserData(null)
					navigate('/login')
				})
	}, [])

	return (
		<div>
			<Outlet />
		</div>
	)
}

export default AuthNav
