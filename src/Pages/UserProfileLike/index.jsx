import React, { useContext } from 'react'

import styles from './UserProfileLike.module.scss'
import MyContext from '../../Components/MyContext'
import UserLikeList from '../../Components/UserLikeList'

function UserProfileLike() {
	const { userData, BrowsingUser } = useContext(MyContext)
	const { token } = userData
	return (
		<div className={styles['container']}>
			<div>
				<UserLikeList token={token} BrowsingUser={BrowsingUser} />
			</div>
		</div>
	)
}
export default UserProfileLike
