import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import styles from './ProfileUserNavBar.module.scss'

import ProfileInfo from '../ProfileInfo'
import PageTitle from '../PageTitle'
import ProfileNavLink from '../ProfileNavLink'
import FollowNavLink from '../FollowNavLink'
function ProfileUserNavBar({ data }) {
	const [d, setD] = useState({})
	// const d = JSON.parse(JSON.stringify(data))//如果需要資料處理進量在useEffect執行
	const location = useLocation()
	const path = location.pathname
	const toRender = path.includes('follow')
	//如果希望載入此元件及執行
	useEffect(() => {
		setD(JSON.parse(JSON.stringify(data)))
	}, [])
	return (
		<div className={styles['container']}>
			<div className={styles['profile-title']}>
				<PageTitle d={d} />
			</div>
			{!toRender && (
				<div className={styles['user-profile-info']}>
					<ProfileInfo data={d} />
				</div>
			)}
			{!toRender && (
				<div className={styles['profile-nav-link']}>
					<ProfileNavLink d={d} />
				</div>
			)}
			{toRender && (
				<div className={styles['profile-nav-link']} style={{ marginTop: '74px' }}>
					<FollowNavLink d={d} />
				</div>
			)}
		</div>
	)
}
export default ProfileUserNavBar
