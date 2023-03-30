import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './TweetBox.module.scss'
import { Myaxios } from '../../constants'
import { timestamp } from '../../utils'

import LikeFullIconButton from '../LikeFullIconButton'
import ReplyIconButton from '../ReplyIconButton'
import LikeIconButton from '../LikeIconButton'

//長得跟UserTweetBox 也有資料由data->d
function TweetBox({ d, token }) {
	console.log(d)
	let [likeCount, setLikeCount] = useState(d.Likes)
	let [isLiked, setIsLiked] = useState(d.currentIsLiked)
	return (
		<div className={styles['container']}>
			<div className={styles['tweet-user-info']}>
				<div className={styles['user-avatar']}>
					<Link to={`/${d.poster.id}`} style={{ textDecoration: 'none' }}>
						<img src={d.poster.avatar} className={styles['avatar-img']} alt='avatar-img' />
					</Link>
				</div>
				<div className={styles['user-info']}>
					<Link to={`/${d.poster.id}`} style={{ textDecoration: 'none' }}>
						<p className={styles['user-info-name']}>{d.poster.name}</p>
						<p className={styles['user-info-account']}>@{d.poster.account}</p>
					</Link>
				</div>
			</div>
			<div className={styles['tweet-content']}>
				{/* <img src={d.image} alt='' /> */}
				<div>{d.description}</div>
				<div className={styles['tweet-timestamp']}>{timestamp(d.createdAt)}</div>
			</div>
			<div className={styles['tweet-social-list']}>
				<div className={styles['tweet-social-group']}>
					<p className={styles['reply-number']}>
						<strong style={{ color: 'black' }}>{d.Replies} </strong>
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
					<ReplyIconButton />
					{/* 缺彈窗功能 */}
				</div>
				<div className={styles['like-btn']}>{isLiked ? <LikeFullIconButton tweetId={d.id} token={token} isLiked={isLiked} setIsLiked={setIsLiked} likeCount={likeCount} setLikeCount={setLikeCount} /> : <LikeIconButton tweetId={d.id} token={token} isLiked={isLiked} setIsLiked={setIsLiked} likeCount={likeCount} setLikeCount={setLikeCount} />}</div>
			</div>
		</div>
	)
}
export default TweetBox
