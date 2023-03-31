import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './UserTweetList.module.scss'
import { Myaxios } from '../../constants'
import { takeErrMsg } from '../../utils'

import UserTweetBox from '../UserTweetBox'

function UserTweetList({ BrowsingUser ,token}) {
	const { account } = useParams()
	const [isLoading, setIsLoading] = useState(true)
	const [Data, setData] = useState(null)
	//當網址中:accout改變在做axios
	useEffect(() => {
		if (BrowsingUser) {
			Myaxios(token)
				.get(`/users/${account}/tweets`)
				.then(e => {
					console.log('使用者推文清單', e.status)
					setData(JSON.parse(JSON.stringify(e.data)))
					if (BrowsingUser) {
						setIsLoading(false)
					}
				})
				.catch(err => {
					console.error(takeErrMsg(err))
					setIsLoading(false)
				})
		} else {
			return BrowsingUser ? setIsLoading(false) : null
		}
	}, [account])

	return (
		<div className={styles['container']}>
			{isLoading ? (
				<div className={styles['loading-animation']}></div>
			) : (
				Data.map((d, i) => {
					return <UserTweetBox data={d} key={i} token={token} />
				})
			)}
		</div>
	)
}

export default UserTweetList
