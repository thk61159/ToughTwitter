import React, { useState, useEffect, useContext } from 'react'
import { useParams, Outlet } from 'react-router-dom'

import styles from './LayoutUser.module.scss'
import MyContext from '../../Components/MyContext'
import { Myaxios } from '../../constants'
import { takeErrMsg } from '../../utils'

import ProfileUserNavBar from '../../Components/ProfileUserNavBar'
import UserSidebarContainer from '../UserSidebarContainer'
import UserPopularBar from '../UserPopularBar'

function LayoutUser() {
	const { userData, BrowsingUser, updateBrowsingUser } = useContext(MyContext)
	const { account } = useParams()
	const [Data, setData] = useState(null)
	//當網址中:accout改變再做axios
	useEffect(() => {
		const { token } = userData
		if (!BrowsingUser || BrowsingUser.id != account) {
			Myaxios(token)
				.get(`/users/${account}`)
				.then(e => {
					console.log('使用者資料', e.status)
					setData(e.data)
					updateBrowsingUser(e.data)
				})
				.catch(err => console.error(takeErrMsg(err)))
		} else if (account == userData.user.id) {
			Myaxios(token)
				.get(`/users/${account}`)
				.then(e => {
					console.log('使用者資料', e.status)
					setData(e.data)
					updateBrowsingUser(e.data)
				})
				.catch(err => console.error(takeErrMsg(err)))
		}
	}, [account])
	return (
		<div className={styles['layout-container']}>
			<div className={styles['column-1']}>
				<UserSidebarContainer />
			</div>
			<div className={styles['column-2']}>
				{Data && <ProfileUserNavBar data={Data} />}
				<Outlet />
			</div>
			<div className={styles['column-3']}>
				<UserPopularBar />
			</div>
		</div>
	)
}

export default LayoutUser
