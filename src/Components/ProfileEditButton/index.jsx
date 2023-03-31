import { useEffect, useState,useContext } from 'react'

import styles from './ProfileEditButton.module.scss'
import MyContext from '../MyContext'

import notificatiobIcon from '../../assets/icons/notification_info.svg'
import messageIcon from '../../assets/icons/letter_icon.svg'
import UserFollowBtn from '../UserFollowButton'

function ProfileEditButton({ setModal }) {
	const { BrowsingUser } = useContext(MyContext)
	return (
		<>
			<div className={styles['container']}>
				{BrowsingUser?.currentUser ? (
					<button
						className={styles['edit-btn']}
						onClick={() => {
							setModal(true)
						}}>
						編輯個人資料
					</button>
				) : (
					<div className={styles['other-btn']}>
						<div className={styles['message-avatar']}>
							<img src={messageIcon} alt='message' className={styles['avatar-img']} />
						</div>
						<div className={styles['bell-avatar']}>
							<img src={notificatiobIcon} alt='bell' className={styles['avatar-img']} />
						</div>
						<UserFollowBtn currentfollowed={BrowsingUser?.currentfollowed} userId={BrowsingUser?.id} />
					</div>
				)}
			</div>
		</>
	)
}
export default ProfileEditButton
