import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './UserLikeList.module.scss'
import { Myaxios } from '../../constants'
import { takeErrMsg } from '../../utils'

import UserLikeBox from '../UserLikeBox'

function UserLikeList({ token, BrowsingUser }) {
	const { account } = useParams()
	const [Data, setData] = useState(null)
	useEffect(() => {
		Myaxios(token)
			.get(`/users/${account}/likes`)
			.then(e => {
				console.log('使用者Like清單', e.status)
				setData(e.data)
			})
			.catch(err => console.error(takeErrMsg(err)))
	}, [account, BrowsingUser])

	return (
		<div className={styles['container']}>
			{Data &&
				Data.map((d, i) => {
					return <UserLikeBox data={d} key={i} />
				})}
		</div>
	)
}

export default UserLikeList
