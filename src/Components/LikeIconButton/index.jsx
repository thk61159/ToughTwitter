import styles from './LikeIconButton.module.scss'
import { Myaxios } from '../../constants'
import { ReactComponent as Like } from '../../assets/icons/like_icon.svg'

function LikeIconButton({ tweetId, token, isLiked, setIsLiked, likeCount, setLikeCount }) {
	const Liked = () => {
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
			{/* 不太明白為什麼 onClick在這層才有作用*/}
			<Like className={styles[1]} onClick={Liked} />
		</div>
	)
}
export default LikeIconButton
