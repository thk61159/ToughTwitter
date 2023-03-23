import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function AuthNav({ Login }) {
	const navigate = useNavigate()
	useEffect(() => {
		if (!Login) navigate('/login')
	}, [Login])

	return (
		<div>
			<Outlet />
		</div>
	)
}

export default AuthNav
