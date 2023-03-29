import React, { useContext } from 'react'

import styles from './UserProfileFollowship.module.scss'
import MyContext from '../../Components/MyContext'
import UserFollowingList from '../../Components/UserFollowshipList'

function UserProfileFollowship() {
	const { userData, BrowsingUser } = useContext(MyContext)
	const { token } = userData
	return (
		<div className={styles['container']}>
			<div>
				<UserFollowingList token={token} BrowsingUser={BrowsingUser} />
			</div>
		</div>
	)
}
export default UserProfileFollowship
