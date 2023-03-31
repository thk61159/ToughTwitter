import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './TweetReplyBox.module.scss'

import UserInfo from './UserInfo'

function TweetReplyBox({ data }) {
	console.log(data)
	const d = JSON.parse(JSON.stringify(data))
	const [replyer, setReplyer] = useState()
	const [poster, setPoster] = useState()
	useEffect(() => {
		setReplyer(d.reply)
		setPoster(d.poster)
	}, [data])
	
	return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link to={`/${replyer?.UserId}`}>
					<img src={replyer?.User.avatar} className={styles['avatar-img']} alt='avatar-img' />
				</Link>
			</div>

			
			<div className={styles['tweet-author']}>
				<div className={styles['tweet-user-info']}>
					<UserInfo d={d} />
				</div>
				<div className={styles['tweet-user-replyto']}>
					回覆
					<Link to={`/${poster?.id}`}>
						<div>@{poster?.account || 'd.account'}</div>
					</Link>
				</div>
				<div className={styles['tweet-content']}>
					<div>{replyer?.comment}</div>
				</div>
			</div>
		</div>
	)
}
export default TweetReplyBox
