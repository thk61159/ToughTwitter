import React from 'react'

import styles from './UserProfileLike.module.scss'
import UserLikeList from '../../Components/UserLikeList'

function UserProfileLike() {
	return (
		<div className={styles['container']}>
			<div>
				<UserLikeList />
			</div>
		</div>
	)
}
export default UserProfileLike
