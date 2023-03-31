import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SettingPage.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../../Components/MyContext'
import { formChange } from '../../utils'
import { takeErrMsg } from '../../utils'

// Components
import Button from '../../Components/Button'
import AuthInput from '../../Components/AuthInput'
import Alert from '../../Components/Alert'

function SettingPage() {
	const { userData, updateUserData } = useContext(MyContext)
	const { token, user } = userData
	const navigate = useNavigate()
	//State
	
	const [account, setAccount] = useState(user?.account)
	const [name, setName] = useState(user?.name)
	const [email, setEmail] = useState(user?.email)
	const [password, setPassword] = useState('')
	const [checkPassword, setCheckPassword] = useState('')
	const [note, setNote] = useState({})
	const [alertNote, setAlertNote] = useState()
	//檢驗realtime input
	function updateNoteField(field, value) {
		if (field === 'password' && value) {
			const regExp = new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.{4,12})')
			return regExp.test(value) ? setNote({ ...note, [field]: '' }) : setNote({ ...note, [field]: '請包含至少一個小寫英文字及數字' })
		} else {
			return !value.trim() && field !== 'password' ? setNote({ ...note, [field]: `${field}不可以空白` }) : setNote({ ...note, [field]: '' })
		}
	}
	//處理資料並送出
	const saveHandler = e => {
		setAlertNote('')
			if (!(account && name && email)) return setAlertNote({ note: '請填所有欄位！', type: 'error' })
			if (password !== checkPassword) {
				setAlertNote({ note: '密碼與確認密碼不符！', type: 'error' })
				setPassword('')
				return setCheckPassword('')
			}
			if(name.length>50) return setAlertNote({ note: '名稱太長拉！', type: 'error' })
			const form = { account, name, email, password }
			
			if (formChange(form, user)) {
				Myaxios(token)
					.put(`users/${user.id}`, form)
					.then(e => {
						const updatedUser = e.data
						updatedUser.currentUser=true
						updateUserData({ ...userData, user: updatedUser })
						setAccount(updatedUser.account)
						setName(updatedUser.name)
						setEmail(updatedUser.email)
						setAlertNote({ note: '編輯成功', type: 'suc' })
						setTimeout(() => {
							navigate('/home')
						}, 2000)
					}).catch(err => {
						setAlertNote({ note: takeErrMsg(err), type: 'error' })
					})
			}else{navigate('/home')}
	}
	// useEffect(() => {
	// 	if (user) {
	// 		setAccount(user.account)
	// 		setName(user.name)
	// 		setEmail(user.email)
	// 	}
	// },[user])
	useEffect(() => {
		updateNoteField('account', account)
	}, [account])
	useEffect(() => {
		updateNoteField('name', name)
		if (name.length > 50) {
			setNote({ ...note, name: '名稱長度超過50字' })
		}
	}, [name])
	useEffect(() => {
		updateNoteField('email', email)
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			setNote({ ...note, email: '信箱格式錯誤' })
		}
	}, [email])
	useEffect(() => {
		updateNoteField('password', password)
	}, [password])
	return (
		<div className={styles['container']}>
			{alertNote && (
				<div
					onClick={() => {
						setAlertNote('')
					}}>
					<Alert alertNote={alertNote.note} alertType={alertNote.type} />
				</div>
			)}
			<h4 className={styles['title']}>帳號設定</h4>
			{/* Auth Form */}
			<div className={styles['auth-form']}>
				<div className={styles['authinput-group']}>
					<AuthInput label='帳號' type='text' value={account} placeholder='請輸入帳號' onChange={setAccount} note={note.account} />

					<AuthInput label='名稱' type='text' value={name} placeholder='請輸入使用者名稱' onChange={setName} note={note.name} />

					<AuthInput label='Email' type='text' value={email} placeholder='請輸入Email' onChange={setEmail} note={note.email} />

					<AuthInput label='密碼（需介於4到～12字元）' type='password' value={password} placeholder='請設定密碼' onChange={setPassword} note={note.password} />

					<AuthInput label='密碼再確認' type='password' value={checkPassword} placeholder='請再次輸入密碼' onChange={setCheckPassword} />
				</div>
				{/* Save Button */}
				<div className={styles['save-button']} onClick={saveHandler}>
					<Button styleName='bg-logo'>儲存</Button>
				</div>
			</div>
		</div>
	)
}

export default SettingPage
