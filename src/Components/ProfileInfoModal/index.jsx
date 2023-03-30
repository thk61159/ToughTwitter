import React, { useState, useEffect, useContext, useRef } from 'react'

import styles from './ProfileInfoModal.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'
import { findExtName } from '../../utils'

import Alert from '../Alert'
import AuthInput from '../AuthInput'
import { ReactComponent as Close } from '../../assets/icons/admin_cross.svg'
import { ReactComponent as Camera } from '../../assets/icons/camera_icon.svg'
import Button from '../Button'

function ProfileInfoModal({ Modal, setModal, setNewD }) {
	const { userData,updateUserData, updateBrowsingUser } = useContext(MyContext)
	const { token, user } = userData
	console.log()
	const bgFileRef = useRef(null) //for button to connect upload input
	const avatarFileRef = useRef(null)
	const [intro, setIntro] = useState(user.introduction)
	const [name, setName] = useState(user.name)
	const [avatarURL, setAvatarURL] = useState(user.avatar)
	const [bgURL, setBgURL] = useState(user.background)
	const [bg, setBg] = useState('')
	const [avatar, setAvatar] = useState('')
	const [error, setError] = useState({})
	const [alertNote, setAlertNote] = useState('')
	const [alertType, setAlertType] = useState('')
	const [nameCount, setNameCount] = useState()
	const [introCount, setIntroCount] = useState()
	const onSelectBg = e => {
		const selectedFile = e.target.files[0]
		const url = URL.createObjectURL(selectedFile)
		const imageSizeInBytes = selectedFile.size
		const extName = findExtName(selectedFile.name)
		if (imageSizeInBytes / 1024 / 1024 > 20) {
			setAlertNote('檔案不可超過20MB')
			return setAlertType('error')
		}
		if (!['jpeg', 'JPEG', 'png', 'PNG'].includes(extName)) {
			setAlertNote('只接受jpeg,JPEG,png,PNG ')
			return setAlertType('error')
		}
		setBg(selectedFile)
		setBgURL(url)
	}
	const onSelectAvatar = e => {
		const selectedFile = e.target.files[0]
		const url = URL.createObjectURL(selectedFile)
		const imageSizeInBytes = selectedFile.size
		const extName = findExtName(selectedFile.name)
		if (imageSizeInBytes / 1024 / 1024 > 20) {
			setAlertNote('檔案不可超過20MB')
			return setAlertType('error')
		}
		if (!['jpeg', 'JPEG', 'png', 'PNG'].includes(extName)) {
			setAlertNote('只接受jpeg,JPEG,png,PNG ')
			return setAlertType('error')
		}
		setAvatar(selectedFile)
		setAvatarURL(url)
	}
	const handleSubmit = e => {
		if (name.length > 50 && intro.length > 160) {
			return setError({ ...error, name: '名稱太長', intro: '自我介紹太長' })
		} else if (name.length > 50) {
			return setError({ ...error, name: '名稱太長' })
		} else if (intro.length > 160) {
			return setError({ ...error, intro: '自我介紹太長' })
		}
		const formData = new FormData()
		formData.append('background', bg)
		formData.append('avatar', avatar)
		formData.append('name', name)
		formData.append('introduction', intro)
		Myaxios(token)
			.put(`/users/${user.id}`, formData, {
				headers: {
					'Content-Type': `multipart/form-data`,
				},
			})
			.then(e => {
				 const updateduser = JSON.parse(JSON.stringify(e.data))
				 updateduser.currentUser = true
				 console.log('資料更新成功', e.status)
				 updateUserData({ token: token, user: updateduser })
				 updateBrowsingUser({ user: updateduser })
				 setNewD(updateduser)
				 setBgURL(updateduser.background)
				 setAvatarURL(updateduser.avatar)
				 setModal(false)
			})
			.catch(err => console.log(err))
	}
	useEffect(() => {
		setNameCount(name.length)
		if (!name) {
			setError({ ...error, name: '請輸入名稱' })
		} else if (name.length > 50) {
			setError({ ...error, name: '名稱不可超過50字' })
		} else {
			setError({ ...error, name: '' })
		}
	}, [name])
	useEffect(() => {
		setIntroCount(intro.length)
		if (intro.length > 50) {
			setError({ ...error, intro: '自我介紹不可超過160字' })
		} else {
			setError({ ...error, intro: '' })
		}
	}, [intro])
	if (!Modal) return null
	return (
		<div className={styles['modal-bg']}>
			{alertNote && (
				<div
					onClick={() => {
						setAlertNote(null)
					}}>
					<Alert alertNote={alertNote} alertType={alertType} />
				</div>
			)}
			<div className={styles['container']}>
				<div className={styles['close-box']}>
					<button
						className={styles['closer']}
						onClick={() => {
							setModal(false)
							setName(user.name)
							setIntro(user.introduction)
							setBgURL(user.background)
							setAvatarURL(user.avater)
							setAlertNote()
							setError()
						}}>
						<Close />
					</button>
					<div className={styles['title']}>編輯個人資料</div>
					<div className={styles['save-button']}>
						{/* 隱藏的 */}
						<input type='file' ref={bgFileRef} onChange={onSelectBg} accept='image/jpg, image/png' style={{ display: 'none' }} data-id='bg' />
						<input type='file' ref={avatarFileRef} onChange={onSelectAvatar} accept='image/jpg, image/png' style={{ display: 'none' }} />
						<button className={styles['none-btn']} onClick={handleSubmit}>
							<Button styleName='bg-logo'>儲存</Button>
						</button>
					</div>
				</div>
				<div className={styles['background-avatar']}>
					<img src={bgURL ? bgURL : 'https://loremflickr.com/320/240?lock=2'} alt='background' className={styles['avatar-img']} />
					<div className={styles['background-avatar-cover']}>
						<div className={styles['background-setting']}>
							<div>
								<button
									className={styles['none-btn']}
									data-id='bg'
									onClick={() => {
										bgFileRef.current.click()
									}}>
									<Camera />
								</button>
							</div>
							<div>
								<button
									className={styles['none-btn']}
									onClick={() => {
										setBgURL(user.background)
									}}>
									<Close className={styles['white-X']} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className={styles['user-avatar']}>
					{user && <img src={avatarURL} alt='user-avatar' className={styles['avatar-img']} />}
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
						<AuthInput label='名稱' type='text' value={name} placeholder='請輸入名稱' onChange={setName} count={nameCount} set={50} note={error.name} />
						<AuthInput label='自我介紹' type='text' value={intro} placeholder='說說你是怎樣的人' onChange={setIntro} count={introCount} set={160} note={error.intro} boxH='147px' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfoModal
