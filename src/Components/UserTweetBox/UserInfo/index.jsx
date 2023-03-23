
import styles from './UserInfo.module.scss'
import { Link } from 'react-router-dom'

function UserInfo({ userInfo }) {
	return (
		<div className={styles['container']}>
			<p className={styles['user-info-name']}>{userInfo.name}</p>
			<p className={styles['user-info-account']}>
				<Link to={`/user/${1}`} className={styles['account-link']}>
					@{userInfo.account}
				</Link>
			</p>
			<p className={styles['user-info-dot']}>•</p>
			<p className={styles['user-info-update']}>3 小時</p>
		</div>
	)
}

export default UserInfo