import React from 'react'

import styles from './UserProfileFollowship.module.scss'
import UserFollowingList from '../../Components/UserFollowshipList'

function UserProfileFollowship() {
	return (
		<div className={styles['container']}>
			<div>
				<UserFollowingList />
			</div>
		</div>
	)
}
export default UserProfileFollowship
