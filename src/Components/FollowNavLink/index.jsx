import React, { useState, useEffect } from 'react'
import styles from './FollowNavLink.module.scss'
import { NavLink } from 'react-router-dom'

function FollowNavLink({ data }) {
	const [d, setD] = useState()
	useEffect(() => {
		setD(data)
	}, [data])
	return (
		<div className={styles['container']}>
			<NavLink to={`/${d?.id}/followings`} className={({ isActive }) => [`${styles['profile-nav-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')} end>
				追蹤清單
			</NavLink>
			<NavLink to={`/${d?.id}/followers`} className={({ isActive }) => [`${styles['profile-nav-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')} end>
				粉絲清單
			</NavLink>
		</div>
	)
}

export default FollowNavLink
