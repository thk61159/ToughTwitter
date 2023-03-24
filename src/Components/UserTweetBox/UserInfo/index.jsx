
import styles from './UserInfo.module.scss'
import { Link } from 'react-router-dom'

import { timeCounter } from '../../../utils'

function UserInfo({ d }) {
	return (
		<div className={styles['container']}>
			<p className={styles['user-info-name']}>{d.poster.name}</p>
			<p className={styles['user-info-account']}>
				<Link to={`/user/${d.poster.account}`} className={styles['account-link']} id = {d.poster.id}>
					@{d.poster.account}
				</Link>
			</p>
			<p className={styles['user-info-dot']}>•</p>
			<p className={styles['user-info-update']}>{timeCounter(d.createdAt)} 小時</p>
		</div>
	)
}

export default UserInfo