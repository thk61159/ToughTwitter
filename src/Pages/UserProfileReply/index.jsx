import React,{useContext} from 'react'

import styles from './UserProfileReply.module.scss'
import MyContext from '../../Components/MyContext'
import UserReplyList from '../../Components/UserReplyList'

function UserProfileReply() {
	const { userData, BrowsingUser } = useContext(MyContext)
	const { token } = userData
	return (
		<div className={styles['container']}>
			<div>
				<UserReplyList token={token} BrowsingUser={BrowsingUser} />
			</div>
		</div>
	)
}
export default UserProfileReply
