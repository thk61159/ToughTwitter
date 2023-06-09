import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './ProfileNavLink.module.scss'

function ProfileNavLink({ data }) {
	const [d, setD] = useState()
	useEffect(() => {
		setD(data)
	}, [data])
	return (
		<div className={styles['container']}>
			<NavLink to={`/${d?.id}`} className={({ isActive }) => [`${styles['profile-nav-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')} end>
				推文
			</NavLink>
			<NavLink to={`/${d?.id}/replies`} className={({ isActive }) => [`${styles['profile-nav-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')} end>
				回覆
			</NavLink>
			<NavLink to={`/${d?.id}/likes`} className={({ isActive }) => [`${styles['profile-nav-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')} end>
				喜歡的內容
			</NavLink>
		</div>
	)
}

export default ProfileNavLink
