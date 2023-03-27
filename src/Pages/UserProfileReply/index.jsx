import React from 'react'

import styles from './UserProfileReply.module.scss'
import UserReplyList from '../../Components/UserReplyList'

function UserProfileReply() {
	return (
		<div className={styles['container']}>
			<div>
				<UserReplyList />
			</div>
		</div>
	)
}
export default UserProfileReply
