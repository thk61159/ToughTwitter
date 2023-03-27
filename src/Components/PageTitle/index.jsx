import { useNavigate } from 'react-router-dom'
import styles from './PageTitle.module.scss'
import { ReactComponent as ArrowPre } from '../../assets/icons/arrowPre.svg'

function PageTitle({ d }) {
	const navigate = useNavigate()
	return (
		<div className={styles['container']}>
			<div className={styles['arrow-img']}>
				<ArrowPre
					onClick={() => {
						navigate(-1)
					}}
				/>
			</div>
			<div className={styles['profile-title']}>
				<div className={styles['user-name']}>{d.name}</div>
				<div className={styles['tweet-count']}>{d.tweetsCounts} 貼文</div>
			</div>
		</div>
	)
}
export default PageTitle
