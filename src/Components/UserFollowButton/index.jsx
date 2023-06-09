import React, { useState, useContext } from 'react'

import styles from './UserFollowBtn.module.scss'

import { Myaxios } from '../../utils'
import MyContext from '../MyContext'

function UserFollowBtn({ currentfollowed, userId }) {
	const { userData } = useContext(MyContext)
	const { token } = userData
	const [followed, setFollowed] = useState(currentfollowed)
	const handleAddFollow = () => {
		Myaxios(token)
			.post(`followships`, { id: userId })
			.then(e => {
				setFollowed(!followed)
			})
			.catch(err => console.log('err'))
	}
	const handleDeleteFollow = () => {
		Myaxios(token)
			.delete(`followships/${userId}`)
			.then(e => {
				setFollowed(!followed)
			})
			.catch(err => console.log('err'))
	}
	return (
		<>
			{followed ? (
				<button className={styles['following-btn']} onClick={handleDeleteFollow}>
					正在跟隨
				</button>
			) : (
				<button className={styles['follow-btn']} onClick={handleAddFollow}>
					跟隨
				</button>
			)}
		</>
	)
}
export default UserFollowBtn
