import React, { useState, useEffect } from 'react'

import styles from './TweetInput.module.scss'

import { Myaxios } from '../../constants'
import TweetSubmitButton from './TweetSubmitButton'

function TweetInput({ setPost, token, user }) {
	let [tweet, setTweet] = useState(null)
	let [error, setError] = useState(null)
	const submitTweet = () => {
		if (!tweet) return setError('不可空白')
		if (tweet.length < 140 || !tweet.trim()){
			Myaxios(token)
				.post(`/tweets`, { description: tweet })
				.then(e => {
					setPost(true)
					setTweet('')
					console.log('貼文送出', e.status)
				})
				.catch(err => console.log(err))
		} else {
			setError('字數不可超過140字或是空白')
		}
	}
	useEffect(() => {
		if (tweet) {
			if (tweet.length > 140) {
				return setError('字數不可超過140字')
			} else if (!tweet.trim()) {
				return setTweet('')
			} else {
				setError(null)
			}
		}
	}, [tweet])
	return (
		<div className={styles['container']}>
			<div className={styles['input-body']}>
				<div className={styles['user-avatar']}>
					{user.avatar&&
					<img src={user.avatar} alt='avatar-img' className={styles['avatar-img']} />}
				</div>
				<textarea className={styles['input-textarea']} placeholder='有什麼新鮮事?' onChange={e => setTweet(e.target.value)} value={tweet}></textarea>
			</div>
			<div className={styles['footer']}>
				<div className={styles['error-message']}>{error}</div>
				<div className={styles['tweet-btn']}>
					<button className={styles['btn-submit']} onClick={submitTweet}>
						<TweetSubmitButton />
					</button>
				</div>
			</div>
		</div>
	)
}
export default TweetInput
