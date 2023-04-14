import React, { useState, useEffect, useContext } from 'react'
import styles from './TweetReplyModal.module.scss'

import MyContext from '../MyContext'
import { Myaxios, takeErrMsg, timeCounter } from '../../utils'

import TweetSubmitButton from './ReplySubmitButton'
import { ReactComponent as Close } from '../../assets/icons/admin_cross.svg'
import DefaultAvatar from '../../assets/icons/AcLogo.svg'

function TweetReplyModal({ Modal, setModal, data, BrowsingUser, setNewReply }) {
	const { userData } = useContext(MyContext)
	const { user, token } = userData
	const [tweet, setTweet] = useState()
	const [poster, setPoster] = useState()
	const [reply, setReply] = useState('')
	const [error, setError] = useState('')
	const submitTweet = () => {
		if (reply?.length < 140 || !reply.trim()) {
			Myaxios(token)
				.post(`tweets/${tweet?.id || tweet?.TweetId}/replies `, { comment: reply })
				.then(e => {
					setNewReply(true)
					setModal(false)
					setReply('')
					console.log('回覆送出', e.status)
				})
				.catch(err => console.error(takeErrMsg(err)))
		} else {
			setError('字數不可超過140字或是空白')
		}
	}
	useEffect(() => {
		if (reply) {
			if (reply?.length > 140) {
				return setError('字數不可超過140字')
			} else if (!reply.trim()) {
				return setReply('')
			} else {
				setError('')
			}
		}
	}, [reply])
	useEffect(() => {
		setTweet(data)
		setPoster(data?.poster || BrowsingUser)
	}, [data])

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
						<img src={poster?.avatar || DefaultAvatar} className={styles['avatar-img']} alt='avatar-img' />
						<div className={styles['user-avatar-bar']}></div>
					</div>
					<div>
						<div className={styles['tweet-box']}>
							<div className={styles['tweet-user-info']}>
								<div className={styles['tweet-user-name']}>{poster?.name}</div>
								<div className={styles['tweet-user-account']}>
									@{poster?.account}•{timeCounter(tweet?.createdAt)}
								</div>
							</div>
							<div className={styles['tweet-content']}>
								<div>{tweet?.description}</div>
							</div>
							<div className={styles['tweet-reply-alert']}>
								回覆給 <span style={{ color: '#FF6600' }}>@{poster?.account}</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles['input-body']}>
					<div className={styles['user-avatar']}>
						<img src={user?.avatar || DefaultAvatar} alt='avatar-img' className={styles['avatar-img']} />
					</div>
					<div>
						<textarea className={styles['input-textarea']} placeholder='推你的回覆...' onChange={e => setReply(e.target.value)} value={reply}></textarea>
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
