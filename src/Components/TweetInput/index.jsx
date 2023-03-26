import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './TweetInput.module.scss'
import MyContext from '../MyContext'
import TweetSubmitButton from './TweetSubmitButton'

function TweetInput() {
	const { user } = useContext(MyContext)
	let [tweet,setTweet]=useState()
	return (
		<div className={styles['container']}>
			<div className={styles['input-body']}>
				<div className={styles['user-avatar']}>
			
						<img src={user.avatar} alt='avatar-img' className={styles['avatar-img']} />
					
				</div>
				<textarea className={styles['input-textarea']} placeholder='有什麼新鮮事?' onChange={e => setTweet(e.target.value)} value={tweet}></textarea>
			</div>
			<div className={styles['footer']}>
				<div className={styles['error-message']}></div>
				<div className={styles['tweet-btn']}>
					<TweetSubmitButton />
				</div>
			</div>
		</div>
	)
}
export default TweetInput
