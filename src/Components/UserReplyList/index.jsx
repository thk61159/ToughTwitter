import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './UserReplyList.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'


import UserReplyBox from '../UserReplyBox'

function UserReplyList() {
	const { token } = useContext(MyContext)
	const { account } = useParams()
	let [Data, setData] = useState(null)
	useEffect(() => {
		if (!Data) {
			Myaxios(token)
				.get(`/users/${account}/tweets`)
				.then(e => {
					console.log('使用者推文清單', e.status)
					setData(e.data)
				})
				.catch(err => console.log(err))
		}
	}, [Data])

	return (
		<div className={styles['container']}>
			{Data &&
				Data.map((d, i) => {
					return <UserReplyBox data={d} key={i} />
				})}
		</div>
	)
}

export default UserReplyList
