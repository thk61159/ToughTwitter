import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './RegisterPage.module.scss'
import { Myaxios } from '../../constants'
import { takeErrMsg } from '../../utils'

//Components
import { ReactComponent as AcLogo } from '../../assets/icons/AcLogo.svg'
import AuthInput from '../../Components/AuthInput'
import Button from '../../Components/Button'
import Alert from '../../Components/Alert'

function RegisterPage() {
	const navigate = useNavigate()
	//狀態設定
	const [account, setAccount] = useState('')
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [checkPassword, setCheckPassword] = useState('')
	const [note, setNote] = useState({})
	const [alertNote, setAlertNote] = useState(null)
	function updateNoteField(field, value) {
		if (field === 'password' && value) {
			const regExp = new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.{4,12})')
			return regExp.test(value) ? setNote({ ...note, [field]: '' }) : setNote({ ...note, [field]: '請包含至少一個小寫英文字及數字' })
		} else {
			return !value.trim() && field !== 'password' ? setNote({ ...note, [field]: `${field}不可以空白` }) : setNote({ ...note, [field]: '' })
		}
	}
  const handleClick = e => {
		setAlertNote(null)
		if (!(account && name && email && password && checkPassword)) return setAlertNote({ note: '請填所有欄位！', type: 'error' })
		if (password !== checkPassword) {
			setAlertNote({ note: '密碼與確認密碼不符！', type: 'error' })
			setPassword('')
			return setCheckPassword('')
		}
		if (name.length > 50) return setAlertNote({ note: '名稱太長拉！', type: 'error' })
		const form = { account, name, email, password, checkPassword }

		Myaxios()
			.post(`/users`, form)
			.then(e => {
				console.log('使用者註冊', e.status, e.data)
        setAlertNote({ note: '編輯成功', type: 'suc' })
        setTimeout(() => {
					navigate('/login')
				}, 2000)
				
			})
      .catch(err => {
        console.error(err)
				setAlertNote({ note: takeErrMsg(err), type: 'error' })
			})
	}
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
		<div className={styles.container}>
			{alertNote && (
				<div
					onClick={() => {
						setAlertNote(null)
						
					}}>
					<Alert alertNote={alertNote.note} alertType={alertNote.type} />
				</div>
			)}
			<div>
				<AcLogo />
			</div>
			<h3 className={styles.title}>建立你的帳號</h3>
			{/* AuthInput group */}
			<div className={styles['authinput-group']}>
				<AuthInput label='帳號' type='text' value={account} placeholder='請輸入帳號' onChange={setAccount} note={note.account} />

				<AuthInput label='名稱' type='text' value={name} placeholder='請輸入使用者名稱' onChange={setName} note={note.name} />

				<AuthInput label='Email' type='text' value={email} placeholder='請輸入Email' onChange={setEmail} note={note.email} />

				<AuthInput label='密碼' type='password' value={password} placeholder='請設定密碼' onChange={setPassword} note={note.password} />

				<AuthInput label='密碼確認' type='password' value={checkPassword} placeholder='請再次輸入密碼' onChange={setCheckPassword} />
			</div>
			<div className={styles['auth-button']} onClick={handleClick}>
				<Button styleName='lg-bg-logo'>註冊</Button>
			</div>
			{/* Auth Link */}
			<Link to='/login' className={styles['auth-link']}>
				<div className={styles['auth-link-text']}>取消</div>
			</Link>
		</div>
	)
}

export default RegisterPage
