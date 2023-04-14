import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './UserPopularCard.module.scss'
import MyContext from '../../../MyContext'
import DefaultAvatar from '../../../../assets/icons/AcLogo.svg'
import UserFollowBtn from '../../../UserFollowButton'
function UserPopularCard({ d }) {
	const { userData } = useContext(MyContext)
	const { user } = userData
	return (
		<div className={styles['container']}>
			<Link to={`/${d.id}`}>
				<img src={d.avatar || DefaultAvatar} alt='user-avatar' className={styles['user-avatar']} />
			</Link>
			<div className={styles['user-info']}>
				<Link to={`/${d.id}`}>
					<p className={styles['user-name']}>{d.name}</p>
				</Link>
				<Link to={`/${d.id}`}>
					<p className={styles['user-account']}>@{d.account}</p>
				</Link>
			</div>

			{user?.id === d?.id ? null : <UserFollowBtn currentfollowed={d.currentfollowed} userId={d.id} />}
		</div>
	)
}
export default UserPopularCard
