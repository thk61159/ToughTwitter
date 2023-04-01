import styles from './UserInfo.module.scss'
import { Link } from 'react-router-dom'

import { timeCounter } from '../../../utils'

function UserInfo({ reply, BrowsingUser }) {
	return (
		<div className={styles['container']}>
			<Link to={`/${BrowsingUser.id}`} className={styles['account-link']}>
				<p className={styles['user-info-name']}>{BrowsingUser.name}</p>
				<p className={styles['user-info-account']}>@{BrowsingUser.name}</p>
			</Link>
			<p className={styles['user-info-dot']}>•</p>
			<p className={styles['user-info-update']}>{timeCounter(reply.createdAt)} </p>
		</div>
	)
}

export default UserInfo
