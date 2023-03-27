import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import styles from './LayoutUser.module.scss'
import MyContext from '../../Components/MyContext'
import { Myaxios } from '../../constants'

//維持中間區塊可以切換變動，其餘左右列固定
import ProfileUserNavBar from '../../Components/ProfileUserNavBar'
import { Outlet } from 'react-router-dom'

//Components
import UserSidebarContainer from '../UserSidebarContainer'
import UserPopularBar from '../UserPopularBar'

function LayoutUser() {
  const { token } = useContext(MyContext)
	const { account } = useParams()
	let [Account, setAccount] = useState(null)
	useEffect(() => {
		if (!Account) {
			Myaxios(token)
				.get(`/users/${account}`)
				.then(e => {
					console.log('使用者資料', e.status)
					setAccount(e.data)
				})
				.catch(err => console.log(err))
		}
	}, [Account])
	return (
		<div className={styles['layout-container']}>
			<div className={styles['column-1']}>
				<UserSidebarContainer />
			</div>
			<div className={styles['column-2']}>
				{Account && <ProfileUserNavBar data={Account} />}
				<Outlet />
			</div>
			<div className={styles['column-3']}>
				<UserPopularBar />
			</div>
		</div>
	)
}

export default LayoutUser
