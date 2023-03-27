import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './UserTweetList.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'
import ProfileContext from '../ProfileContext'

import UserTweetBox from '../UserTweetBox'
function UserTweetList() {
	const { token } = useContext(MyContext)
	const BrowsingUser = useContext(ProfileContext)
	const { account } = useParams()
	const [isLoading, setIsLoading] = useState(true)
	let [Data, setData] = useState(null)
	//當網址中:accout改變在做axios
	useEffect(() => {
		if(true){
			Myaxios(token)
				.get(`/users/${account}/tweets`)
				.then(e => {
					console.log('使用者推文清單', e.status)
					setData(e.data)
					if (BrowsingUser) {
						setIsLoading(false)
					}
				})
				.catch(err => {
					console.log(err)
					setIsLoading(false)
				})
		} else {
			return BrowsingUser?setIsLoading(false):null
		}
	}, [account, BrowsingUser])

	return (
		<div className={styles['container']}>
			{isLoading ? (
				<div className={styles['loading-animation']}></div>
			) : (
				Data.map((d, i) => {
					return <UserTweetBox data={d} key={i} />
				})
			)}
		</div>
	)
}

export default UserTweetList
