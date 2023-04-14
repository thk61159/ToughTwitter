import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './TweetBox.module.scss'
import { timestamp } from '../../utils'

import LikeFullIconButton from '../LikeFullIconButton'
import ReplyIconButton from '../ReplyIconButton'
import LikeIconButton from '../LikeIconButton'
import DefaultAvatar from '../../assets/icons/AcLogo.svg'
import TweetReplyModal from '../TweetReplyModal'

//長得跟UserTweetBox 也有資料由data->d
function TweetBox({ data, token, setNewReply }) {
	const [d, setD] = useState()
	const [likeCount, setLikeCount] = useState(data?.Likes)
	const [isLiked, setIsLiked] = useState(data?.currentIsLiked)
	const [Modal, setModal] = useState(false)
	useEffect(() => {
		setD(data)
		setLikeCount(data?.Likes)
		setIsLiked(data?.currentIsLiked)
	}, [data])
	return (
		<div className={styles['container']}>
			<div className={styles['tweet-user-info']}>
				<div className={styles['user-avatar']}>
					<Link to={`/${d?.poster.id}`} style={{ textDecoration: 'none' }}>
						<img src={d?.poster.avatar || DefaultAvatar} className={styles['avatar-img']} alt='avatar-img' />
					</Link>
				</div>
				<div className={styles['user-info']}>
					<Link to={`/${d?.poster.id}`} style={{ textDecoration: 'none' }}>
						<p className={styles['user-info-name']}>{d?.poster.name}</p>
						<p className={styles['user-info-account']}>@{d?.poster.account}</p>
					</Link>
				</div>
			</div>
			<div className={styles['tweet-content']}>
				{/* <img src={d.image} alt='' /> */}
				<div>{d?.description}</div>
				<div className={styles['tweet-timestamp']}>{timestamp(d?.createdAt)}</div>
			</div>
			<div className={styles['tweet-social-list']}>
				<div className={styles['tweet-social-group']}>
					<p className={styles['reply-number']}>
						<strong style={{ color: 'black' }}>{d?.Replies} </strong>
						回覆
					</p>
				</div>
				<div className={styles['tweet-social-group']}>
					<p className={styles['like-number']}>
						<strong style={{ color: 'black' }}>{likeCount} </strong>
						喜歡次數
					</p>
				</div>
			</div>
			<div className={styles['tweet-social-btn']}>
				<div className={styles['reply-link']}>
					<ReplyIconButton setModal={setModal} />
					<TweetReplyModal Modal={Modal} setModal={setModal} data={d} setNewReply={setNewReply} />
				</div>
				<div className={styles['like-btn']}>{isLiked ? <LikeFullIconButton tweetId={d?.id} token={token} isLiked={isLiked} setIsLiked={setIsLiked} likeCount={likeCount} setLikeCount={setLikeCount} /> : <LikeIconButton tweetId={d?.id} token={token} isLiked={isLiked} setIsLiked={setIsLiked} likeCount={likeCount} setLikeCount={setLikeCount} />}</div>
			</div>
		</div>
	)
}
export default TweetBox
