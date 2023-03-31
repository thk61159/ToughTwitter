import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './UserReplyList.module.scss'
import { Myaxios } from '../../constants'
import { takeErrMsg } from '../../utils'

import UserReplyBox from '../UserReplyBox'

function UserReplyList({ token, BrowsingUser }) {
	const { account } = useParams()
	const [Data, setData] = useState(null)
	useEffect(() => {
		if (BrowsingUser && !Data) {
			Myaxios(token)
				.get(`/users/${account}/replied_tweets`)
				.then(e => {
					console.log('使用者推文清單', e.status)
					setData(e.data)
				})
				.catch(err => console.error(takeErrMsg(err)))
		}
	}, [account])

	return (
		<div className={styles['container']}>
			{Data &&
				Data.map((d, i) => {
					return <UserReplyBox data={d} key={i} BrowsingUser={BrowsingUser} />
				})}
		</div>
	)
}

export default UserReplyList
