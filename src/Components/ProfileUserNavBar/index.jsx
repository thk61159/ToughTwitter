import styles from './ProfileUserNavBar.module.scss'
import ProfileInfo from '../ProfileInfo'
import PageTitle from '../PageTitle'
import ProfileNavLink from '../ProfileNavLink'
function ProfileUserNavBar({ data }) {
	const d = JSON.parse(JSON.stringify(data))
	return (
		<div className={styles['container']}>
			<div className={styles['profile-title']}>
				<PageTitle d={d} />
			</div>
			<div className={styles['background-avatar']}>
				<img src={d.background ? d.background : 'https://loremflickr.com/320/240?lock=2'} alt='background' us className={styles['avatar-img']} />
			</div>
			<div className={styles['user-profile-info']}>
				<ProfileInfo d={d} />
			</div>
			<div className={styles['profile-nav-link']}>
				<ProfileNavLink d={d} />
			</div>
		</div>
	)
}
export default ProfileUserNavBar
