import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './UserFollowshipBox.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'

import UserFollowBtn from '../UserFollowButton'
import DefaultAvatar from '../../assets/icons/AcLogo.svg'


function UserFollowshipBox({ d }) {
	
	
	return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link to={`/${d.followingId}`}>
					<img src={d.avatar || DefaultAvatar} className={styles['avatar-img']} alt='avatar-img' />
				</Link>
			</div>
			<div className={styles['tweet-user-info']}>
				<div className={styles['tweet-user-head']}>
					<p className={styles['user-info-name']}>{d.name}</p>
					<UserFollowBtn currentfollowed={d.currentfollowed} userId={d.followingId} />
				</div>

				<div className={styles['tweet-content']}>
					<Link to={`/tweet/${d.followingId}`} className={styles['tweet-content-link']}>
						<div>{d.introduction}</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
export default UserFollowshipBox
