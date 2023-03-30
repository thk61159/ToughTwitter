import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './UserTweetBox.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'
import ProfileContext from '../ProfileContext'

import UserInfo from './UserInfo'
import LikeFullIconButton from '../LikeFullIconButton'
import ReplyIconButton from '../ReplyIconButton'
import LikeIconButton from '../LikeIconButton'

function UserTweetBox({ data, token }) {
	const { BrowsingUser } = useContext(MyContext)
	const poster = BrowsingUser //poster
	const tweet = JSON.parse(JSON.stringify(data))
	let [likeCount, setLikeCount] = useState(tweet.Likes)
	let [isLiked, setIsLiked] = useState(tweet.currentIsLiked)
	return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link to={`/${poster.id}`}>
					<img src={poster.avatar} className={styles['avatar-img']} alt='avatar-img' />
				</Link>
			</div>
			<div className={styles['tweet-user-info']}>
				<UserInfo tweet={tweet} poster={poster} />
				<div className={styles['tweet-content']}>
					<Link to={`/tweet/${tweet.id}`} className={styles['tweet-content-link']}>
						{/* <img src={d.image} alt='' /> */}
						<div>{tweet.description}</div>
					</Link>
				</div>
				<div className={styles['tweet-social-list']}>
					<div className={styles['tweet-social-group']}>
						<div className={styles['reply-link']}>
							<ReplyIconButton />
						</div>
						<p className={styles['reply-number']}>{tweet.Replies}</p>
					</div>
					<div className={styles['tweet-social-group']}>
						<div className={styles['like-btn']}>
							{/* 按Full-> d.likes --, 另一個是++ */}
							{isLiked ? <LikeFullIconButton tweetId={tweet.id} token={token} isLiked={isLiked} setIsLiked={setIsLiked} likeCount={likeCount} setLikeCount={setLikeCount} /> : <LikeIconButton tweetId={tweet.id} token={token} isLiked={isLiked} setIsLiked={setIsLiked} likeCount={likeCount} setLikeCount={setLikeCount} />}
						</div>
						<p className={styles['like-number']}>{likeCount}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default UserTweetBox
