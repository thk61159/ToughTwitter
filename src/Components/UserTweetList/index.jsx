import React, { useState, useEffect, useContext } from 'react'

import styles from './UserTweetList.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'

import UserTweetBox from '../UserTweetBox'

function UserTweetList() {
	const { token } = useContext(MyContext)
  let [Data, setData] = useState(null)
	useEffect(() => {
		Myaxios(token)
			.get('/tweets')
			.then(e => {
				setData(e.data)
			})
			.catch(err => console.log(err))
	}, [token])
	return (
		<div className={styles['container']}>
			{Data && Data.map((d, i) => {
				return <UserTweetBox data={d} key={i} />
			})}
		</div>
	)
}

export default UserTweetList
