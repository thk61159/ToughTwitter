import React from 'react'
import { Outlet,useLocation } from 'react-router-dom'

import styles from './Layout.module.scss'

//Components
import UserSidebarContainer from '../UserSidebarContainer'
import UserPopularBar from '../UserPopularBar'

function Layout() {
	const path = useLocation().pathname
	return (
		<div className={styles['layout-container']}>
			<div className={styles['column-1']}>
				<UserSidebarContainer />
			</div>
			<div className={styles['column-2']}>
				<Outlet />
			</div>
			<div className={styles['column-3']}>
				{path!=='/setting'&&
				<UserPopularBar />}
			</div>
		</div>
	)
}

export default Layout
