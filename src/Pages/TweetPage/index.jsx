import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom'

import styles from './TweetPage.module.scss'
import MyContext from '../../Components/MyContext'
import { Myaxios, takeErrMsg } from '../../utils'

import TweetReplyList from '../../Components/TweetReplyList'
import TweetBox from '../../Components/TweetBox'
import { ReactComponent as ArrowPre } from '../../assets/icons/arrowPre.svg'

function TweetPage() {
	const {userData}= useContext(MyContext)
	const { token } = userData
	const navigate = useNavigate()
	const { tweet_id } = useParams()
	const [Data, setData] = useState('')
	const [newReply, setNewReply] = useState(false)
	useEffect(() => {
		Myaxios(token)
			.get(`tweets/${tweet_id}`)
			.then(e => {
				console.log('特定推文', e.status)
				setData(e.data)
			})
			.catch(err => console.error(takeErrMsg(err)))
	}, [token, tweet_id, newReply])
	return (
		<div className={styles['container']}>
			<div className={styles['page-title-box']}>
				<div className={styles['page-title-arrow']}>
					<ArrowPre
						onClick={() => {
							navigate('/home')
						}}
					/>
				</div>
				<div className={styles['page-title']}>推文</div>
			</div>

			<div className={styles['tweet-input']}>{Data && <TweetBox data={Data} token={token} setNewReply={setNewReply} />}</div>
			<div className={styles['tweet-list']}>
				<TweetReplyList token={token} newReply={newReply} setNewReply={setNewReply} />
			</div>
		</div>
	)
}

export default TweetPage
