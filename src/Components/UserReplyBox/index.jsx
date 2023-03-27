import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './UserReplyBox.module.scss'
import ProfileContext from '../ProfileContext'

import UserInfo from './UserInfo'



function UserReplyBox({ data }) {
	const reply = JSON.parse(JSON.stringify(data))//about comment
	const poster = reply.Tweet.poster 
	const browsingUser = useContext(ProfileContext) 
	return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link to={`/${browsingUser.id}`}>
					<img src={browsingUser.avatar} className={styles['avatar-img']} alt='avatar-img' />
				</Link>
			</div>
			<div className={styles['tweet-user-info']}>
				<UserInfo reply={reply} browsingUser={browsingUser} />
				<div>
					回覆
					<Link to={`/${poster.id}`}>
						<div>@{poster.account}</div>
					</Link>
				</div>
				<div className={styles['tweet-content']}>
					<Link to={`/tweet/${reply.TweetId}`} className={styles['tweet-content-link']}>
						{/* <img src={d.image} alt='' /> */}
						<div>{reply.comment}</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
export default UserReplyBox
