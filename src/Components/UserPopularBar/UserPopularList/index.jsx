import React, { useState, useEffect, useContext } from 'react'

import styles from './UserPopularList.module.scss'
import { Myaxios } from '../../../constants'
import MyContext from '../../MyContext'
import { takeErrMsg } from '../../../utils'

import UserPopularCard from './UserPopularCard'


function UserPopularList() {
	const { userData } = useContext(MyContext)
	const { token } = userData
	const [Data, setData] = useState(null)
	useEffect(() => {
		if (!Data) {
			Myaxios(token)
				.get(`/followships?limit=10&sort=DESC`)
				.then(e => {
					console.log('人氣追蹤', e.status)
					setData(e.data)
				})
				.catch(err => console.error(takeErrMsg(err)))
		}
	}, [Data])
	

	return (
		<div className={styles['container']}>
			<h4 className={styles['popular__title']}>推薦跟隨</h4>
			<div className={styles['popular__user-list']}>{Data && Data.map((d, i) => <UserPopularCard data={d} key={i} />)}</div>
		</div>
	)
}
export default UserPopularList
