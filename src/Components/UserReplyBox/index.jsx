import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './UserReplyBox.module.scss'


import UserInfo from './UserInfo'



function UserReplyBox({ data, BrowsingUser }) {
	const reply = JSON.parse(JSON.stringify(data)) //about comment
	const poster = reply.Tweet.poster
	return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link to={`/${BrowsingUser.id}`}>
					<img src={BrowsingUser.avatar} className={styles['avatar-img']} alt='avatar-img' />
				</Link>
			</div>
			<div className={styles['tweet-user-info']}>
				<UserInfo reply={reply} BrowsingUser={BrowsingUser} />
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
