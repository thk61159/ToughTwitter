import React, { useEffect  } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

import { Myaxios } from '../../constants'


function AuthNav({ userData, setUserData }) {
	const localToken = localStorage.getItem('token') //測試過可以取出
	const location = useLocation()
	console.log(location)

	const navigate = useNavigate()
	useEffect(() => {
		if (!localToken) return navigate('/login')
		Myaxios(localToken)
			.post('/users/test-token')
			.then(e => {
				if (e.data.status === 'success') {
					setUserData({ token: localToken, user: e.data.user })
					if (location.pathname === '/') return navigate('home')
					navigate(location.pathname)
				}
			})
			.catch(e => {
				setUserData('')
				navigate('/login')
			})
	}, [localToken])

	return (
		<div>
			<Outlet />
		</div>
	)
}

export default AuthNav
