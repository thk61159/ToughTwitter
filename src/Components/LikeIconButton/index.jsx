import styles from './LikeIconButton.module.scss'

import { ReactComponent as Like } from '../../assets/icons/like_icon.svg'

function LikeIconButton({ Liked }) {
	return (
		<div className={styles['container']}>
			{/* 不太明白為什麼 onClick在這層才有作用*/}
			<Like className={styles[1]} onClick={Liked} />
		</div>
	)
}
export default LikeIconButton
