import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './UserTweetList.module.scss'
import { Myaxios } from '../../constants'
import { takeErrMsg } from '../../utils'

import TweetReplyBox from '../TweetReplyBox'

function TweetReplyList({ token }) {
	const { tweet_id } = useParams()
	const [Data, setData] = useState('')
	useEffect(() => {
		if (!Data) {
			Myaxios(token)
				.get(`tweets/${tweet_id}/replies`)
				.then(e => {
					console.log('特定推文回覆清單', e.status)
					setData(JSON.parse(JSON.stringify(e.data)))
				})
				.catch(err => console.error(takeErrMsg(err)))
		}
	}, [Data])

	return (
		<div className={styles['container']}>
			{Data &&
				Data.map((d, i) => {
					return <TweetReplyBox d={d} key={i} />
				})}
		</div>
	)
}

export default TweetReplyList
