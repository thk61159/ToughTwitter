import { useEffect, useState,useContext } from 'react'

import styles from './ProfileEditButton.module.scss'
import MyContext from '../MyContext'

import notificatiobIcon from '../../assets/icons/notification_info.svg'
import messageIcon from '../../assets/icons/letter_icon.svg'
import UserFollowBtn from '../UserFollowButton'
import Alert from '../Alert'

function ProfileEditButton({ setModal }) {
	const { BrowsingUser } = useContext(MyContext)
	const [alertNote, setAlertNote] = useState()
	return (
		<>
			<div className={styles['container']}>
				{alertNote && (
					<div
						onClick={() => {
							setAlertNote('')
						}}>
						<Alert alertNote={alertNote.note} alertType={alertNote.type} />
					</div>
				)}
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
						<div
							className={styles['message-avatar']}
							onClick={() => {
								setAlertNote({ note: '功能開發中敬請期待', type: 'notify' })
							}}>
							<img src={messageIcon} alt='message' className={styles['avatar-img']} />
						</div>
						<div
							className={styles['bell-avatar']}
							onClick={() => {
								setAlertNote({ note: '功能開發中敬請期待', type: 'notify' })
							}}>
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
