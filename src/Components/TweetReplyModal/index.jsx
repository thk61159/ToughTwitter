import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './TweetReplyModal.module.scss'

import MyContext from '../MyContext'
import { Myaxios } from '../../constants'
import TweetSubmitButton from './ReplySubmitButton'
import { ReactComponent as Close } from '../../assets/icons/admin_cross.svg'

function TweetReplyModal({ Modal, setModal }) {
	const { token, user } = useContext(MyContext)
	const navigate = useNavigate()
	let [tweet, setTweet] = useState(null)
	let [error, setError] = useState(null)
	const submitTweet = () => {
		if (tweet.length < 140 || !tweet.trim()) {
			Myaxios(token)
				.post(`/tweets`, { description: tweet })
				.then(e => {
					setModal(false)
					setTweet('')
					console.log('回覆送出',e.status)
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
						<img src={user.avatar} className={styles['avatar-img']} alt='avatar-img' />
						<div className={styles['user-avatar-bar']}></div>
					</div>
					<div>
						<div className={styles['tweet-box']}>
							<div className={styles['tweet-user-info']}>
								<div className={styles['tweet-user-name']}>name</div>
								<div className={styles['tweet-user-account']}>@account・time</div>
							</div>
							<div className={styles['tweet-content']}>
								<div>{'t.descriptiontweet.descrescriptiontweet.descrescriptiontweet.descrescriptiontweet.descrescriptiontweet.descrescriptiontweet.descrescriptiontweet.descrescriptiontweet.descrescriptiontweet.descrescriptiontweet.descrescriptiontweet.descrescriptiontweet.descriptiontwn'}</div>
							</div>
							<div className={styles['tweet-reply-alert']}>
								回覆給 <span style={{color:'#FF6600'}}>@{'account'}</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles['input-body']}>
					<div className={styles['user-avatar']}>
						<img src={user.avatar} alt='avatar-img' className={styles['avatar-img']} />
					</div>
					<div>
						<textarea className={styles['input-textarea']} placeholder='推你的回覆...' onChange={e => setTweet(e.target.value)} value={tweet}></textarea>
					</div>
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
export default TweetReplyModal
