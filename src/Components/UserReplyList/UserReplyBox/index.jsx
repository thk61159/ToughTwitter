import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './UserReplyBox.module.scss'

import UserInfo from './UserInfo'
import DefaultAvatar from '../../../assets/icons/AcLogo.svg'


function UserReplyBox({ reply, BrowsingUser }) {
	return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link to={`/${BrowsingUser.id}`}>
					<img src={BrowsingUser.avatar || DefaultAvatar} className={styles['avatar-img']} alt='avatar-img' />
				</Link>
			</div>

			<div className={styles['tweet-author']}>
				<div className={styles['tweet-user-info']}>
					<UserInfo reply={reply} BrowsingUser={BrowsingUser} />
				</div>
				<div className={styles['tweet-user-replyto']}>
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
	)
}
export default UserReplyBox
