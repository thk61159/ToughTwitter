import styles from './UserInfo.module.scss'
import { Link } from 'react-router-dom'

import { timeCounter } from '../../../utils'

function UserInfo({ d }) {
	return (
		<div className={styles['container']}>
			<Link to={`/${d.User.id}`} className={styles['account-link']}>
				<p className={styles['user-info-name']}>{d.User.name}</p>
				<p className={styles['user-info-account']}>@{d.User.account}</p>
			</Link>
			<p className={styles['user-info-dot']}>•</p>
			<p className={styles['user-info-update']}>{timeCounter(d.createdAt)} 小時</p>
		</div>
	)
}

export default UserInfo