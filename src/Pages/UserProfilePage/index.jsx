import React from 'react'

import styles from './UserProfilePage.module.scss'
import UserTweetList from '../../Components/UserTweetList'

function UserProfilePage() {
	return (
		<div className={styles['container']}>
			<div>
				<UserTweetList  />
			</div>
		</div>
	)
}
export default UserProfilePage
