import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './UserLikeBox.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'

import UserInfo from './UserInfo'
import LikeFullIconButton from '../LikeFullIconButton'
import ReplyIconButton from '../ReplyIconButton'
import LikeIconButton from '../LikeIconButton'
import TweetReplyModal from '../TweetReplyModal'
import DefaultAvatar from '../../assets/icons/AcLogo.svg'

function UserRelpyBox({ tweet }) {
	const { userData, BrowsingUser } = useContext(MyContext)
	const { token } = userData
	const poster = tweet.poster
	const [likeCount, setLikeCount] = useState(tweet.Likes)
	const [isLiked, setIsLiked] = useState(tweet.currentIsLiked)
	const [Modal, setModal] = useState(false)
	return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link to={`/${poster.account}`}>
					<img src={poster.avatar || DefaultAvatar} className={styles['avatar-img']} alt='avatar-img' />
				</Link>
			</div>
			<div className={styles['tweet-user-info']}>
				<UserInfo tweet={tweet} poster={poster} />
				<div className={styles['tweet-content']}>
					<Link to={`/tweet/${poster.id}`} className={styles['tweet-content-link']}>
						<div>{tweet.description}</div>
					</Link>
				</div>
				<div className={styles['tweet-social-list']}>
					<div className={styles['tweet-social-group']}>
						<div className={styles['reply-link']}>
							<ReplyIconButton setModal={setModal} />
							<TweetReplyModal Modal={Modal} setModal={setModal} data={tweet} />
						</div>
						<p className={styles['reply-number']}>{tweet.Replies}</p>
					</div>
					<div className={styles['tweet-social-group']}>
						<div className={styles['like-btn']}>{isLiked ? <LikeFullIconButton tweetId={tweet.TweetId} token={token} isLiked={isLiked} setIsLiked={setIsLiked} likeCount={likeCount} setLikeCount={setLikeCount} /> : <LikeIconButton tweetId={tweet.TweetId} token={token} isLiked={isLiked} setIsLiked={setIsLiked} likeCount={likeCount} setLikeCount={setLikeCount} />}</div>
						<p className={styles['like-number']}>{likeCount}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default UserRelpyBox
