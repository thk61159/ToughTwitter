import React, { useState, useEffect, useContext, useRef } from 'react'

import styles from './ProfileInfoModal.module.scss'
import { Myaxios } from '../../constants'

import AuthInput from '../AuthInput'
import { ReactComponent as Close } from '../../assets/icons/admin_cross.svg'
import { ReactComponent as Camera } from '../../assets/icons/camera_icon.svg'
import Button from '../Button'

// function wordCounter

import { Link } from 'react-router-dom' //按到追隨者、追隨中轉址用
function ProfileInfoModal({ Modal, setModal, currentUser }) {
	const { token, user } = currentUser
	const bgFileRef = useRef(null)
	const avatarFileRef = useRef(null)
	const [intro, setIntro] = useState(user.introduction)
	const [name, setName] = useState(user.name)
	const [bg, setBg] = useState('')
	const [avatar, setAvatar] = useState('')
	const [error, setError] = useState('Error')
	const onSelectBg = e => {
		const selectedFile = e.target.files[0]
		const url = URL.createObjectURL(selectedFile)
		setBg(selectedFile)
		console.log(url)
		
	}
	const onSelectAvatar = e => {
		const selectedFile = e.target.files[0]
		const url = URL.createObjectURL(selectedFile)
		setAvatar(selectedFile)
		console.log(url)
		
	}
	const handleSubmit = async e => {
		try {
			e.preventDefault()
			const formData = new FormData()
			await formData.append('background', bg)
			await formData.append('avatar', avatar)
			await formData.append('name', name)
			await formData.append('introduction', intro)
			console.log(formData)
			const response = await Myaxios(token).put(`/users/${user.id}`, formData, {
				headers: {
					'Content-Type': `multipart/form-data`,
				},
			})
			console.log(response)
		} catch (err) {
			console.log(err)
		}
	}

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
					<div className={styles['title']}>編輯個人資料</div>
					<div className={styles['save-button']}>
						<form onSubmit={handleSubmit}>
							<input type='file' ref={bgFileRef} name='background' onChange={onSelectBg} accept='image/jpg, image/png' style={{ display: 'none' }} />
							<input type='file' ref={avatarFileRef} name='avatar' onChange={onSelectAvatar} accept='image/jpg, image/png' style={{ display: 'none' }} />
							<button className={styles['none-btn']} type='submit'>
								<Button styleName='bg-logo'>儲存</Button>
							</button>
						</form>
					</div>
				</div>
				<div className={styles['background-avatar']}>
					<img src={bg ? bg : user.background ? user.background : 'https://loremflickr.com/320/240?lock=2'} alt='background' className={styles['avatar-img']} />
					<div className={styles['background-avatar-cover']}>
						<div className={styles['background-setting']}>
							<div>
								<button className={styles['none-btn']}>
									<Camera
										onClick={() => {
											bgFileRef.current.click()
										}}
									/>
								</button>
							</div>
							<div>
								<button className={styles['none-btn']} onClick={'dosomething'}>
									<Close className={styles['white-X']} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className={styles['user-avatar']}>
					<img src={avatar ? avatar : user.avatar ? user.avatar : 'https://loremflickr.com/320/240?lock=3'} alt='user-avatar' className={styles['avatar-img']} />
					<div className={styles['user-avatar-cover']}>
						<div>
							<button
								className={styles['none-btn']}
								onClick={() => {
									avatarFileRef.current.click()
								}}>
								<Camera />
							</button>
						</div>
					</div>
				</div>
				<div className={styles['user-detail']}>
					{/* 太神了 */}
					<div className={styles['user-info']}>
						{/* AuthInput({(label, type, value, placeholder, onChange, note)}) */}
						<AuthInput label='名稱' type='text' value={name} placeholder='請輸入名稱' onChange={setName} counter={'counter'} note={'error'} />
						<AuthInput label='自我介紹' type='text' value={intro} placeholder='說說你是怎樣的人' onChange={setIntro} counter={'counter'} note={'error'} boxH='147px' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfoModal
