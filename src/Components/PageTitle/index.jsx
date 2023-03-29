import { useContext } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import styles from './PageTitle.module.scss'
import MyContext from '../MyContext'
import { ReactComponent as ArrowPre } from '../../assets/icons/arrowPre.svg'

function PageTitle({ d }) {
	const navigate = useNavigate()
	const path = useLocation().pathname
	const { account } = useParams()
	const { userData } = useContext(MyContext)
	const { user } = userData
	const previousPage = () => {
		if (account == user.id && account == path.slice(1, path.length)) {
			navigate('/home')
		}
		else {
			navigate(`/${user.id}`)
		}
	}
	return (
		<div className={styles['container']}>
			<div className={styles['arrow-img']}>
				<ArrowPre onClick={previousPage} />
			</div>
			{d&&<div className={styles['profile-title']}>
				<div className={styles['user-name']}>{d.name}</div>
				<div className={styles['tweet-count']}>{d.tweetsCounts} 貼文</div>
			</div>}
		</div>
	)
}
export default PageTitle
