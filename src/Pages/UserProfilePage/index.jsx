import React, { useContext } from 'react'

import styles from './UserProfilePage.module.scss'
import MyContext from '../../Components/MyContext'
import UserTweetList from '../../Components/UserTweetList'

function UserProfilePage() {
	const { userData, BrowsingUser } = useContext(MyContext)
	const { token } = userData
	return (
		<div className={styles['container']}>
			<div>
				<UserTweetList token={token} BrowsingUser={BrowsingUser} />
			</div>
		</div>
	)
}
export default UserProfilePage
