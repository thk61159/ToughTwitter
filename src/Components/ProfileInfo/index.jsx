import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom' //按到追隨者、追隨中轉址用

import styles from './ProfileInfo.module.scss'
import MyContext from '../MyContext'

import DefaultAvatar from '../../assets/icons/AcLogo.svg'
import DefaultBackground from '../../assets/icons/background.svg'
import ProfileEditButton from '../ProfileEditButton'
import ProfileInfoModal from '../ProfileInfoModal'
import Alert from '../Alert'

function ProfileInfo({ data }) {
	const { userData,BrowsingUser } = useContext(MyContext)
	const [Modal, setModal] = useState(false)
	const [d, setD] = useState(BrowsingUser || data)
	const [newD, setNewD] = useState('')
	const [alertNote, setAlertNote] = useState()
	
	useEffect(() => {
		if (newD) {
			console.log('這裡有bug')
			setD(newD)
			// setAlertNote({note:'成功',type:'suc'})
			setNewD('')
		} else {
			setD(BrowsingUser || data)
		}
	}, [ data, BrowsingUser])
	return (
		<>
			{data && (
				<div className={styles['container']}>
					{alertNote && (
						<div
							onClick={() => {
								setAlertNote('')
							}}>
							<Alert alertNote={alertNote.note} alertType={alertNote.type} />
						</div>
					)}
					<div className={styles['background-avatar']}>
						<img src={d.background || DefaultBackground} alt='background' className={styles['avatar-img']} />
					</div>
					<div className={styles['user-avatar']}>
						<img src={d.avatar || DefaultAvatar} alt='user-avatar' className={styles['avatar-img']} />
					</div>
					<div className={styles['user-detail']}>
						{/* 太神了 */}
						<ProfileEditButton data={d} setModal={setModal} />
						{/* 彈出編輯匡 */}
						<ProfileInfoModal Modal={Modal} setModal={setModal} setNewD={setNewD} data={d} />
						<div className={styles['user-info']}>
							<p className={styles['user-name']}>{d.name}</p>
							<p className={styles['user-account']}>@{d.account}</p>
						</div>
						<div className={styles['user-description']}></div>
						<div className={styles['user-track-info']}>
							<div className={styles['user-following']}>
								<Link to={`/${d.id}/followings`} className={styles['number-link']}>
									{d.followingsCounts}
								</Link>
								<p className={styles['note']}>個跟隨中</p>
							</div>
							<div className={styles['user-following']}>
								<Link to={`/${d.id}/followers`} className={styles['number-link']}>
									{d.followersCounts}
								</Link>
								<p className={styles['note']}>位跟隨者</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default ProfileInfo;
