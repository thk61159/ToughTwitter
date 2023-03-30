import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './UserReplyBox.module.scss'


import UserInfo from './UserInfo'



function UserReplyBox({ data, BrowsingUser }) {
	const reply = JSON.parse(JSON.stringify(data)) //about comment
	
	return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link to={`/${BrowsingUser.id}`}>
					<img src={BrowsingUser.avatar} className={styles['avatar-img']} alt='avatar-img' />
				</Link>
			</div>
			<div className={styles['tweet-user-info']}>
				<UserInfo reply={reply} BrowsingUser={BrowsingUser} />
				<div className={styles['tweet-author']}>
					<div style={{display:'flex'}}>
						回覆
						<Link to={`/${reply.UserId}`}>
							<div>@{reply.account}</div>
						</Link>
					</div>
					<div className={styles['tweet-content']}>
							<div>{reply.comment}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default UserReplyBox
