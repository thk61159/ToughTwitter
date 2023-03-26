import styles from './LikeFullIconButton.module.scss'

import { ReactComponent as LikeFull } from '../../assets/icons/like_full_icon.svg'

function LikeFullIconButton({ unLiked }) {
	return (
		<div className={styles['container']}>
			<LikeFull className={styles[2]} onClick={unLiked} />
		</div>
	)
}
export default LikeFullIconButton
