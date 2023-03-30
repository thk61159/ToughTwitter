import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom' //按到追隨者、追隨中轉址用

import styles from './ProfileInfo.module.scss'
import MyContext from '../MyContext'

import ProfileEditButton from '../ProfileEditButton'
import ProfileInfoModal from '../ProfileInfoModal'
import Alert from '../Alert'

function ProfileInfo({ data }) {
	const { userData,BrowsingUser } = useContext(MyContext)
	const [Modal, setModal] = useState(false)
	const [d, setD] = useState(BrowsingUser || data)
	const [newD, setNewD] = useState(null)
	const [alertNote, setAlertNote] = useState()
	
	useEffect(() => {
		if (newD) {
			console.log('這裡有bug')
			setD(newD)
			// setAlertNote({note:'成功',type:'suc'})
			setNewD(null)
		} else {
			setD(BrowsingUser || data)
			console.log(d)
		}
	}, [d, data, BrowsingUser])
	return (
		<>
			{data&&<div className={styles['container']}>
				{alertNote && (
					<div
						onClick={() => {
							setAlertNote(null)
						}}>
						<Alert alertNote={alertNote.note} alertType={alertNote.type} />
					</div>
				)}
				<div className={styles['background-avatar']}>
					<img src={d.background ? d.background : 'https://loremflickr.com/320/240?lock=2'} alt='background' className={styles['avatar-img']} />
				</div>
				<div className={styles['user-avatar']}>
					<img src={d.avatar} alt='user-avatar' className={styles['avatar-img']} />
				</div>
				<div className={styles['user-detail']}>
					{/* 太神了 */}
					<ProfileEditButton currentUser={d.currentUser} setModal={setModal} />
					{/* 彈出編輯匡 */}
					{userData && <ProfileInfoModal Modal={Modal} setModal={setModal} setNewD={setNewD} userData={userData} />}
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
			</div>}
		</>
	)
}

export default ProfileInfo;
