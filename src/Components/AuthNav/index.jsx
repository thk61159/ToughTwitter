import React, { useEffect, useContext } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

import MyContext from '../../Components/MyContext'
import { Myaxios } from '../../constants'

function AuthNav() {
	const {userData,updateUserData} = useContext(MyContext)
	const  token  = userData ? userData.token: null
	const localToken = localStorage.getItem('token') //測試過可以取出
	const location = useLocation()
	const path = location.pathname
	const navigate = useNavigate()
	useEffect(() => {
		if (token) return navigate(location.pathname)
		Myaxios(localToken)
			.post('/users/test-token')
			.then(e => {
				console.log('localToken驗證', e.status)
				if (e.status === 200) {
					updateUserData({ token: localToken, user: e.data })
					//用正則比較好但不會
					const dirHome = ['/', '/login', 'register']
					if (dirHome.includes(location.pathname)) return navigate('home')
					navigate(location.pathname)
				}
			})
			.catch(err => {
				console.log(err)
				updateUserData(null)
				if (path === '/admin') {
					navigate('/admin')
				} else {
					navigate('/login')
				}
				
			})
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
