import { useLocation } from 'react-router-dom'
import styles from './ProfileUserNavBar.module.scss'
import ProfileInfo from '../ProfileInfo'
import PageTitle from '../PageTitle'
import ProfileNavLink from '../ProfileNavLink'
import FollowNavLink from '../FollowNavLink'
function ProfileUserNavBar({ data }) {
	const d = JSON.parse(JSON.stringify(data))
	const location = useLocation()
	const path = location.pathname
	const toRender = path.includes('follow')
	return (
		<div className={styles['container']} >
			<div className={styles['profile-title']}>
				<PageTitle d={d} />
			</div>
			{!toRender && (
				<div className={styles['background-avatar']}>
					<img src={d.background ? d.background : 'https://loremflickr.com/320/240?lock=2'} alt='background' us className={styles['avatar-img']} />
				</div>
			)}
			{!toRender && (
				<div className={styles['user-profile-info']}>
					<ProfileInfo d={d} />
				</div>
			)}
			{!toRender && (
				<div className={styles['profile-nav-link']}>
					<ProfileNavLink d={d} />
				</div>
			)}
			{toRender && (
				<div className={styles['profile-nav-link']} style={{marginTop:'74px'}}>
					<FollowNavLink d={d} />
				</div>
			)}
		</div>
	)
}
export default ProfileUserNavBar
