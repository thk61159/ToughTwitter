import React from 'react'
import styles from './LikeIconButton.module.scss'
import { Myaxios, takeErrMsg } from '../../utils'

import { ReactComponent as Like } from '../../assets/icons/like_icon.svg'

function LikeIconButton({ tweetId, token, isLiked, setIsLiked, likeCount, setLikeCount }) {
	const Liked = () => {
		Myaxios(token)
			.post(`/tweets/${tweetId}/like`)
			.then(e => {
				setIsLiked(!isLiked)
				setLikeCount((likeCount += 1))
			})
			.catch(err => console.error(takeErrMsg(err)))
	}
	return (
		<div className={styles['container']}>
			{/* 不太明白為什麼 onClick在這層才有作用*/}
			<Like className={styles[1]} onClick={Liked} />
		</div>
	)
}
export default LikeIconButton
