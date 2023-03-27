import styles from './FollowNavLink.module.scss'
import { NavLink } from "react-router-dom";

function FollowNavLink({ d }) {
	return (
		<div className={styles['container']}>
			<NavLink to={`/${d.id}/following`} className={({ isActive }) => [`${styles['profile-nav-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')} end>
				追蹤清單
			</NavLink>
			<NavLink to={`/${d.id}/follower`} className={({ isActive }) => [`${styles['profile-nav-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')} end>
				粉絲清單
			</NavLink>
			
		</div>
	)
}

export default FollowNavLink
