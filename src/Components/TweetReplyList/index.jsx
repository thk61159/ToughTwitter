import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './UserTweetList.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'

import TweetReplyBox from '../TweetReplyBox'

function TweetReplyList() {
	const { token } = useContext(MyContext)
	const { tweet_id } = useParams()
	let [Data, setData] = useState(null)
	useEffect(() => {
		if (!Data) {
		Myaxios(token)
			.get(`tweets/${tweet_id}/replies`)
			.then(e => {
				console.log('特定推文回覆清單', e.status)
				setData(e.data)
			})
			.catch(err => console.log(err))
	}
}, [Data])
	

	return (
		<div className={styles['container']}>
			{Data && Data.map((d, i) => {
				return <TweetReplyBox data={d} key={i} />
			})}
		</div>
	)
}

export default TweetReplyList
