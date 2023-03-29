import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import styles from './ProfileUserNavBar.module.scss'
import { Myaxios } from '../../constants'

import ProfileInfo from '../ProfileInfo'
import PageTitle from '../PageTitle'
import ProfileNavLink from '../ProfileNavLink'
import FollowNavLink from '../FollowNavLink'
function ProfileUserNavBar({ data, setBrowsingUser, setUserData }) {
	const d = JSON.parse(JSON.stringify(data))
	const location = useLocation()
	const path = location.pathname
	const toRender = path.includes('follow')

	return (
		<div className={styles['container']}>
			<div className={styles['profile-title']}>
				<PageTitle d={d} />
			</div>
			{!toRender && (
				<div className={styles['user-profile-info']}>
					<ProfileInfo d={d} setBrowsingUser={setBrowsingUser} setUserData={setUserData} />
				</div>
			)}
			{!toRender && (
				<div className={styles['profile-nav-link']}>
					<ProfileNavLink d={decodeURI} />
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
