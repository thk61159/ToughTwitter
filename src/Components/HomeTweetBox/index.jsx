import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './HomeTweetBox.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'

import UserInfo from './UserInfo'
import LikeFullIconButton from '../LikeFullIconButton'
import ReplyIconButton from '../ReplyIconButton'
import LikeIconButton from '../LikeIconButton'

function HomeTweetBox({ data }) {
	const { token } = useContext(MyContext)
	const d = JSON.parse(JSON.stringify(data))
	const id = d.UserId
	let [likeCount, setLikeCount] = useState(d.Likes)
	let [isLiked, setIsLiked] = useState(d.isLiked)
	const unLiked = e => {
		console.log('clicked unLike')
		Myaxios(token)
			.post(`/tweets/${d.id}/unlike`)
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
			.post(`/tweets/${d.id}/like`)
			.then(e => {
				setIsLiked(!isLiked)
				setLikeCount((likeCount += 1))
			})
			.catch(err => console.log('err'))
	}
	return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link to={ `/${d.UserId}`}>
					<img src={d.poster.avatar} className={styles['avatar-img']} alt='avatar-img' />
				</Link>
			</div>
			<div className={styles['tweet-user-info']}>
				<UserInfo d={d} />
				<div className={styles['tweet-content']}>
					<Link to={`/tweet/${d.id}`} className={styles['tweet-content-link']}>
						{/* <img src={d.image} alt='' /> */}
						<div>{d.description}</div>
					</Link>
				</div>
				<div className={styles['tweet-social-list']}>
					<div className={styles['tweet-social-group']}>
						<div className={styles['reply-link']}>
							<ReplyIconButton />
						</div>
						<p className={styles['reply-number']}>{d.Replies}</p>
					</div>
					<div className={styles['tweet-social-group']}>
						<div className={styles['like-btn']}>
							{/* 按Full-> d.likes --, 另一個是++ */}
							{isLiked ? <LikeFullIconButton unLiked={unLiked} /> : <LikeIconButton Liked={Liked} />}
						</div>
						<p className={styles['like-number']}>{likeCount}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default HomeTweetBox
