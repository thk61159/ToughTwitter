import React, { useState, useContext, useEffect } from 'react'

import styles from './HomeTweetList.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'
import { takeErrMsg } from '../../utils'

import HomeTweetBox from '../HomeTweetBox'

function HomeTweetList({ post, setPost }) {
	const { userData } = useContext(MyContext)
	const { token } = userData
	const [Data, setData] = useState('')
	useEffect(() => {
		// if (!Data) {
			Myaxios(token)
				.get('/tweets')
				.then(e => {
					console.log('首頁推文', e.status)
					setData(JSON.parse(JSON.stringify(e.data)))
				})
				.catch(err => console.error(takeErrMsg(err)))
		// }
	}, [])
	useEffect(() => {
		if (post) {
			Myaxios(token)
				.get('/tweets')
				.then(e => {
					console.log('首頁推文更新', e.status)
					setPost(false)
					setData(JSON.parse(JSON.stringify(e.data)))
				})
				.catch(err => console.error(takeErrMsg(err)))
		}
	}, [post])

	return (
		<div className={styles['container']}>
			{Data &&
				Data.map((d, i) => {
					return <HomeTweetBox data={d} key={i} />
				})}
		</div>
	)
}

export default HomeTweetList
