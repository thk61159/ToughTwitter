import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './UserLikeList.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'

import UserLikeBox from '../UserLikeBox'

function UserLikeList({ token, BrowsingUser }) {
	const { account } = useParams()
	let [Data, setData] = useState(null)
	useEffect(() => {
		if (!Data && BrowsingUser) {
			Myaxios(token)
				.get(`/users/${account}/likes`)
				.then(e => {
					console.log(e)
					console.log('使用者推文清單', e.status)
					setData(e.data)
				})
				.catch(err => console.log(err))
		}
	}, [account,Data])

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
