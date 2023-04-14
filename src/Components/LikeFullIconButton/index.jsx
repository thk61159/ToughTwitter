import React from 'react'
import styles from './LikeFullIconButton.module.scss'
import { Myaxios, takeErrMsg } from '../../utils'

import { ReactComponent as LikeFull } from '../../assets/icons/like_full_icon.svg'

function LikeFullIconButton({ tweetId, token, isLiked, setIsLiked, likeCount, setLikeCount }) {
	const unLiked = e => {
		Myaxios(token)
			.post(`/tweets/${tweetId}/unlike`)
			.then(e => {
				// likeCount不應該是-1
				setIsLiked(!isLiked)
				setLikeCount(likeCount <= 1 ? 0 : (likeCount -= 1))
			})
			.catch(err => console.error(takeErrMsg(err)))
	}
	return (
		<div className={styles['container']}>
			<LikeFull className={styles[2]} onClick={unLiked} />
		</div>
	)
}
export default LikeFullIconButton
