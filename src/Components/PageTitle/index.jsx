import { useParams, useNavigate } from 'react-router-dom'
import styles from './PageTitle.module.scss'
import { ReactComponent as ArrowPre } from '../../assets/icons/arrowPre.svg'

function PageTitle(props) {
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
				<div className={styles['user-name']}>{'user1'}</div>
				<div className={styles['tweet-count']}>{2} 貼文</div>
			</div>
		</div>
	)
}
export default PageTitle
