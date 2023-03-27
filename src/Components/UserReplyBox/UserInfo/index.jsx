import styles from './UserInfo.module.scss'
import { Link } from 'react-router-dom'

import { timeCounter } from '../../../utils'

function UserInfo({ reply, browsingUser }) {
	return (
		<div className={styles['container']}>
			<Link to={`/${browsingUser.id}`} className={styles['account-link']}>
				<p className={styles['user-info-name']}>{browsingUser.name}</p>
				<p className={styles['user-info-account']}>@{browsingUser.name}</p>
			</Link>
			<p className={styles['user-info-dot']}>•</p>
			<p className={styles['user-info-update']}>{timeCounter(reply.createdAt)} 小時</p>
		</div>
	)
}

export default UserInfo
