import React, { useState, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './UserNavBar.module.scss'
import MyContext from '../../MyContext'
import NavBarItem from './NavBarItem'
import TweetButtonSideBar from './TweetButtonSideBar'
import TweetInputModal from '../../TweetInputModal'

//Component
import { ReactComponent as AcLogo } from '../../../assets/icons/AcLogo.svg'
import { ReactComponent as House } from '../../../assets/icons/house.svg'
import { ReactComponent as HouseActive } from '../../../assets/icons/house_Full.svg'
import { ReactComponent as Head } from '../../../assets/icons/head.svg'
import { ReactComponent as HeadActive } from '../../../assets/icons/head_Full.svg'
import { ReactComponent as Gear } from '../../../assets/icons/gear.svg'
import { ReactComponent as GearActive } from '../../../assets/icons/gear_Full.svg'


function UserNavBar() {
	const { userData } = useContext(MyContext)
	const { user } = userData
	// const [user,setUser] = useState()
	const [Modal, setModal] = useState(false)
	// useEffect(() => {
	// 	if (userData.user) {
	// 		setUser(userData.user)
	// 	}
	// }, [userData])
	return (
		<>
			{user&&<div className={styles['container']}>
				<AcLogo className={styles['navbar-logo']} />
				<NavBarItem>
					<NavLink to={'/home'} className={({ isActive }) => [`${styles['navbar-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')} end>
						<House className={styles['navbar-link__logo']} />
						<HouseActive className={styles['navbar-link__logo-active']} />
					</NavLink>
					<NavLink to={'/home'} className={({ isActive }) => [`${styles['navbar-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')} end>
						{' '}
						<p className={styles['navbar-link__title']}>首頁</p>
					</NavLink>
				</NavBarItem>
				<NavBarItem>
					<NavLink to={`/${user.id}`} className={({ isActive }) => [`${styles['navbar-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')}>
						<Head className={styles['navbar-link__logo']} />
						<HeadActive className={styles['navbar-link__logo-active']} />
						<p className={styles['navbar-link__title']}>個人資料</p>
					</NavLink>
				</NavBarItem>
				<NavBarItem>
					<NavLink to={'/setting'} className={styles['navbar-link']} end>
						<Gear className={styles['navbar-link__logo']} />
						<GearActive className={styles['navbar-link__logo-active']} />
					</NavLink>
					<NavLink to={'/setting'} className={({ isActive }) => [`${styles['navbar-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')} end>
						<p className={styles['navbar-link__title']}>設定</p>
					</NavLink>
				</NavBarItem>
				<div
					className={styles['remove-btn']}
					onClick={() => {
						setModal(!Modal)
					}}>
					<TweetButtonSideBar />
				</div>

				<TweetInputModal Modal={Modal} setModal={setModal} />
				<div className={styles['logout-btn']}></div>
			</div>}
		</>
	)
}

export default UserNavBar
