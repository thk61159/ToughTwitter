import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Myaxios } from '../../constants'


function AuthNav({ userData, setUserData }) {
	const localToken = localStorage.getItem('token') //測試過可以取出

	const navigate = useNavigate()
	useEffect(() => {
		if (!localToken) return navigate('/login')
		Myaxios(localToken)
			.post('/users/test-token')
			.then(e => {
				if (e.data.status === 'success') {
					setUserData({token:localToken})
					navigate('/home')
				}
			})
			.catch(e => {
				setUserData('')
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
