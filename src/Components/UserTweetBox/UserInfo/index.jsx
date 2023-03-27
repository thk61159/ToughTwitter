import styles from './UserInfo.module.scss'
import { Link } from 'react-router-dom'

import { timeCounter } from '../../../utils'

function UserInfo({ tweet, poster }) {
	return (
		<div className={styles['container']}>
			<Link to={`/${poster.id}`} className={styles['account-link']}>
				<p className={styles['user-info-name']}>{poster.name}</p>
				<p className={styles['user-info-account']}>@{poster.account}</p>
			</Link>
			<p className={styles['user-info-dot']}>•</p>
			<p className={styles['user-info-update']}>{timeCounter(tweet.createdAt)} 小時</p>
		</div>
	)
}

export default UserInfo
