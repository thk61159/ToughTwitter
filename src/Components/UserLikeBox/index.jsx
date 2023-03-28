import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './UserRelpyBox.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'

import UserInfo from './UserInfo'
import LikeFullIconButton from '../LikeFullIconButton'
import ReplyIconButton from '../ReplyIconButton'
import LikeIconButton from '../LikeIconButton'

function UserRelpyBox({ data }) {
	const { token } = useContext(MyContext)
	const d = JSON.parse(JSON.stringify(data))
	const tweet = d.LikedPost //about liked tweet
	const poster = d.LikedPost.poster
	let [likeCount, setLikeCount] = useState(tweet.Likes)
	let [isLiked, setIsLiked] = useState(d.currentIsLiked)
	const unLiked = e => {
		console.log('clicked unLike')
		Myaxios(token)
			.post(`/tweets/${tweet.id}/unlike`)
			.then(e => {
				// likeCount不應該是-1
				setIsLiked(!isLiked)
				setLikeCount(likeCount <= 1 ? 0 : (likeCount -= 1))
			})
			.catch(err => console.log('err'))
	}
	const Liked = () => {
		console.log('clicked Like')
		Myaxios(token)
			.post(`/tweets/${tweet.id}/like`)
			.then(e => {
				setIsLiked(!isLiked)
				setLikeCount((likeCount += 1))
			})
			.catch(err => console.log('err'))
	}
	return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link to={`/${poster.account}`}>
					<img src={poster.avatar} className={styles['avatar-img']} alt='avatar-img' />
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
							<ReplyIconButton />
						</div>
						<p className={styles['reply-number']}>{tweet.Replies}</p>
					</div>
					<div className={styles['tweet-social-group']}>
						<div className={styles['like-btn']}>
							{isLiked ? <LikeFullIconButton unLiked={unLiked} /> : <LikeIconButton Liked={Liked} />}
						</div>
						<p className={styles['like-number']}>{likeCount}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default UserRelpyBox
