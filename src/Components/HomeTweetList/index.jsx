import React, { useState, useContext, useEffect } from 'react'

import styles from './HomeTweetList.module.scss'
import MyContext from '../MyContext'
import { takeErrMsg, Myaxios } from '../../utils'

import HomeTweetBox from '../HomeTweetBox'

function HomeTweetList({ post, setPost }) {
	const { userData, newPost, updateNewPost } = useContext(MyContext)

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
		if (post || newPost) {
			Myaxios(token)
				.get('/tweets')
				.then(e => {
					console.log('首頁推文更新', e.status)
					console.log(newPost,'//////////////')
					updateNewPost(false)
					setPost(false)
					setData(JSON.parse(JSON.stringify(e.data)))
				})
				.catch(err => console.error(takeErrMsg(err)))
		}
	}, [post, newPost])

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
