import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import styles from './UserInfo.module.scss'

import { timeCounter } from '../../../utils'

function UserInfo({ d }) {
	const [replyer, setReplyer] = useState()
	useEffect(() => {
		setReplyer(d.reply)
	}, [d])
	
	return (
		<div className={styles['container']}>
			<Link to={`/${replyer?.UserId}`} className={styles['account-link']}>
				<p className={styles['user-info-name']}>{replyer?.User.name}</p>
				<p className={styles['user-info-account']}>@{replyer?.User.account}</p>
			</Link>
			<p className={styles['user-info-dot']}>•</p>
			<p className={styles['user-info-update']}>{timeCounter(replyer?.createdAt)} 小時</p>
		</div>
	)
}

export default UserInfo
