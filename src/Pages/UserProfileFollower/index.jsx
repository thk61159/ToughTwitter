import React from 'react'

import styles from './UserProfileFollowing.module.scss'
import UserFollowingList from '../../Components/UserFollowshipList'

function UserProfileFollowing() {
	return (
		<div className={styles['container']}>
			<div>
				<UserFollowingList />
			</div>
		</div>
	)
}
export default UserProfileFollowing
