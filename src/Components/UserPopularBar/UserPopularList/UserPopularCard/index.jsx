import styles from './UserPopularCard.module.scss'
import DefaultAvatar from '../../../../assets/icons/AcLogo.svg'
import { Link } from 'react-router-dom'
import UserFollowBtn from '../../../UserFollowButton'
function UserPopularCard({ data }) {
  const d = JSON.parse(JSON.stringify(data))
	return (
		<div className={styles['container']}>
			<Link to={`/${d.user.id}`}>
				<img src={d.user.avatar ? d.user.avatar : DefaultAvatar} alt='user-avatar' className={styles['user-avatar']} />
			</Link>
			<div className={styles['user-info']}>
				<p className={styles['user-name']}>{d.user.name}</p>
				<p className={styles['user-account']}>@{d.user.account}</p>
			</div>

			<UserFollowBtn currentfollowed={d.currentfollowed} userId={d.user.id} />
		</div>
	)
}
export default UserPopularCard
