import React, { useState, useEffect, useContext } from 'react'
import styles from './ProfileInfoModal.module.scss'

import AuthInput from '../AuthInput'
import { ReactComponent as Close } from '../../assets/icons/admin_cross.svg'
import { ReactComponent as Camera } from '../../assets/icons/camera_icon.svg'
import Button from '../Button'

// function wordCounter


function ProfileInfoModal({ Modal, setModal }) {
	const [intro, setIntro] = useState()
	const [name, setName] = useState()
	const [error, setError] = useState('Error')

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
					<div className={styles['save-button']} onClick={'saveHandler!!!!!!!!!!!!!!!!!!'}>
						<Button styleName='bg-logo'>儲存</Button>
					</div>
				</div>
				<div className={styles['background-avatar']}>
					<img src={'https://loremflickr.com/320/240?lock=2'} alt='background' us className={styles['avatar-img']} />
					<div className={styles['background-avatar-cover']}>
						<div className={styles['background-setting']}>
							<div>
								<Camera />
							</div>
							<div>
								<Close className={styles['white-X']} />
							</div>
						</div>
					</div>
				</div>
				<div className={styles['user-avatar']}>
					<img src={'https://loremflickr.com/320/240?lock=3'} alt='user-avatar' className={styles['avatar-img']} />
					<div className={styles['user-avatar-cover']}>
						<div>
							<Camera />
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
