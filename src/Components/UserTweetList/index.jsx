import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styles from './UserTweetList.module.scss'
import { API_URL } from '../../constants'
import UserTweetBox from '../UserTweetBox'

function UserTweetList() {
  const token = localStorage.getItem("token");
  let [Data, setData] = useState(null)
  const getTweets = axios.create({
		baseURL: API_URL,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
  useEffect(() => {
    getTweets
			.get('/api/users/tweets')
			.then(e => setData(e.data))
			.catch(err => console.log(err))
  }, [])
	return (
		<div className={styles['container']}>
			{Data && Data.map((d, i) => {
				return <UserTweetBox data={d} key={i} />
			})}
		</div>
	)
}

export default UserTweetList
