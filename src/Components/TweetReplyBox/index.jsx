import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './TweetReplyBox.module.scss'

import UserInfo from './UserInfo'
import DefaultAvatar from '../../assets/icons/AcLogo.svg'

function TweetReplyBox({ d }) {
	const [reply, setReply] = useState()
	const [replyer, setReplyer] = useState()
	const [poster, setPoster] = useState()
	useEffect(() => {
		setReply(d)
		setReplyer(d.User)
		setPoster(d.poster)
	}, [d])

	return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link to={`/${replyer?.id}`}>
					<img src={replyer?.avatar || DefaultAvatar} className={styles['avatar-img']} alt='avatar-img' />
				</Link>
			</div>

			<div className={styles['tweet-author']}>
				<div className={styles['tweet-user-info']}>{replyer && <UserInfo reply={reply} replyer={replyer} />}</div>
				<div className={styles['tweet-user-replyto']}>
					回覆
					<Link to={`/${poster?.id}`}>
						<div>@{poster?.account || 'd.account'}</div>
					</Link>
				</div>
				<div className={styles['tweet-content']}>
					<div>{reply?.comment}</div>
				</div>
			</div>
		</div>
	)
}
export default TweetReplyBox
