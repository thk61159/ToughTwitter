import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './TweetInputModal.module.scss'
import MyContext from '../MyContext'
import { Myaxios } from '../../constants'
import { takeErrMsg } from '../../utils'

import TweetSubmitButton from './TweetSubmitButton'
import { ReactComponent as Close } from '../../assets/icons/admin_cross.svg'
import DefaultAvatar from '../../assets/icons/AcLogo.svg'

function TweetInputModal({ Modal,setModal }) {
	const { userData } = useContext(MyContext)
	const { token, user } = userData
	const [tweet, setTweet] = useState('')
	const [error, setError] = useState('')
	const submitTweet = () => {
		if (tweet.length < 140 || !tweet.trim()) {
			Myaxios(token)
				.post(`/tweets`, { description: tweet })
				.then(e => {
					setModal(false)
					setTweet('')
					console.log('推文送出', e.status)
				})
				.catch(err => console.error(takeErrMsg(err)))
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
				setError('')
			}
		}
	}, [tweet])
	// useEffect(() => {
		
	// }, [userData])
	if (!Modal) return null
	return (
		<div className={styles['modal-bg']}>
			<div className={styles['container']}>
				<div className={styles['close-box']}>
					<button
						className={styles['closer']}
						onClick={() => {
							setModal(false)
						}}>
						<Close />
					</button>
				</div>
				<div className={styles['input-body']}>
					<div className={styles['user-avatar']}>
						<img src={user.avatar || DefaultAvatar} alt='avatar-img' className={styles['avatar-img']} />
					</div>
					<textarea className={styles['input-textarea']} placeholder='有什麼新鮮事?' onChange={e => setTweet(e.target.value)} value={tweet}></textarea>
				</div>
				<div>
					<div className={styles['footer']}>
						<div className={styles['error-message']}>{error}</div>
						<div className={styles['tweet-btn']}>
							<button className={styles['btn-submit']} onClick={submitTweet}>
								<TweetSubmitButton />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default TweetInputModal
