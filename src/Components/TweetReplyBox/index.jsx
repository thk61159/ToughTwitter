import { Link, useParams } from 'react-router-dom'

import styles from './TweetReplyBox.module.scss'

import UserInfo from './UserInfo'

function TweetReplyBox({ data }) {
	const { account } = useParams()
	const d = JSON.parse(JSON.stringify(data))

	return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link to={`/${d.User.id}`}>
					<img src={d.User.avatar} className={styles['avatar-img']} alt='avatar-img' />
				</Link>
			</div>
			<div className={styles['tweet-user-info']}>
				<UserInfo d={d} />
				<div>
					回覆
					<Link to={`/${d.UserId}`}>
						<div>@{account}</div>
					</Link>
				</div>
				<div className={styles['tweet-content']}>
					<div>{d.comment}</div>
				</div>
			</div>
		</div>
	)
}
export default TweetReplyBox
