import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './UserInfo.module.scss'
import MyContext from '../../MyContext'
import { timeCounter } from '../../../utils'

function UserInfo({ tweet }) {
	const { BrowsingUser } = useContext(MyContext)
	useEffect(() => {	
	}, [BrowsingUser])

	return (
		<div className={styles['container']}>
			<Link to={`/${BrowsingUser?.id}`} className={styles['account-link']}>
				<p className={styles['user-info-name']}>{BrowsingUser?.name}</p>
				<p className={styles['user-info-account']}>@{BrowsingUser?.account}</p>
			</Link>
			<p className={styles['user-info-dot']}>•</p>
			<p className={styles['user-info-update']}>{timeCounter(tweet.createdAt)} 小時</p>
		</div>
	)
}

export default UserInfo
