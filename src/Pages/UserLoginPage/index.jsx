import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './UserLoginPage.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../../Components/MyContext'

// Components
import Button from '../../Components/Button'
import AuthInput from '../../Components/AuthInput'
import { ReactComponent as AcLogo } from '../../assets/icons/AcLogo.svg'

function UserLoginPage() {
	const { updateUserData } = useContext(MyContext)
	const navigate = useNavigate()
	const [account, setAccount] = useState('')
	const [password, setPassword] = useState('')
	const [note, setNote] = useState({})
	// 事件處理
	const handleClick = () => {
		if (!password || !account) return setNote({ password: '請輸入帳號密碼' })
		// 點擊登入發送 POST /api/users/login
		Myaxios().post('/users/login', { account, password })
			.then(response => {
				const { token, user } = response.data.data
				console.log('login token', token)
				if (token) {
					localStorage.setItem('token', token)
					updateUserData({ token: token, user: user })
					navigate('/home')
				}
				setNote({})
				//如果伺服器回傳錯誤會直接被丟到catch，所以沒有特別檢查 !token
			})
			.catch(err => {
				//此error來自伺服器的回傳
				if (err.response.status === 400) {
					setNote({ account: '帳號不存在！' })
				}
				if (err.response.status === 401) {
					setNote({ password: '帳號或密碼有誤' })
				}
			})
	}
	return (
		<div className={styles.container}>
			<div>
				<AcLogo />
			</div>
			<h3 className={styles.title}>登入Alphitter</h3>
			{/* AuthInput group */}
			<div className={styles['authinput-group']}>
				<AuthInput label='帳號' type='text' value={account} placeholder='請輸入帳號' onChange={setAccount} note={note.account} />

				<AuthInput label='密碼' type='password' value={password} placeholder='請輸入密碼' onChange={setPassword} note={note.password} />
			</div>
			<div className={styles['auth-button']} onClick={handleClick}>
				<Button styleName='lg-bg-logo'>登入</Button>
			</div>
			{/* 超連結 */}
			<div className={styles['auth-link-box']}>
				<Link to='/register' className={styles['auth-link']}>
					<div className={styles['auth-link-text']}>註冊</div>
				</Link>
				<div className={styles['auth-link-dot']}>·</div>
				<Link to='/admin' className={styles['auth-link']}>
					<div className={styles['auth-link-text']}>後台登入</div>
				</Link>
			</div>
		</div>
	)
}

export default UserLoginPage
