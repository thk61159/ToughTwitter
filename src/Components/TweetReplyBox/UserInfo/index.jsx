import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './UserInfo.module.scss'

import { timeCounter } from '../../../utils'

function UserInfo({ replyer, reply }) {
	return (
		<div className={styles['container']}>
			<Link to={`/${replyer?.id}`} className={styles['account-link']}>
				<p className={styles['user-info-name']}>{replyer?.name}</p>
				<p className={styles['user-info-account']}>@{replyer?.account}</p>
			</Link>
			<p className={styles['user-info-dot']}>•</p>
			<p className={styles['user-info-update']}>{timeCounter(reply?.createdAt)}</p>
		</div>
	)
}

export default UserInfo
