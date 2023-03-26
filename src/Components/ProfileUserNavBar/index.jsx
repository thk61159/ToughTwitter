import styles from './ProfileUserNavBar.module.scss'
import ProfileInfo from '../ProfileInfo'
import PageTitle from '../PageTitle'
import ProfileNavLink from '../ProfileNavLink'
function ProfileUserNavBar(props) {
	return (
		<div className={styles['container']}>
			<div className={styles['profile-title']}>
				<PageTitle />
			</div>
			<div className={styles['background-avatar']}>
				<img src={'https://loremflickr.com/320/240?lock=2'} alt='background' us className={styles['avatar-img']} />
			</div>
			<div className={styles['user-profile-info']}>
				<ProfileInfo />
			</div>
			<div className={styles['profile-nav-link']}>
				<ProfileNavLink />
			</div>
		</div>
	)
}
export default ProfileUserNavBar
