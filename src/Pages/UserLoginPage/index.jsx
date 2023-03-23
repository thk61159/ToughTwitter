import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'
import { ReactComponent as AcLogo } from '../../assets/icons/AcLogo.svg'
import styles from './UserLoginPage.module.scss'
import { API_URL } from '../../constants'

// Components
import Button from '../../Components/Button'
import AuthInput from '../../Components/AuthInput'

function UserLoginPage({ setLogin }) {
	const navigate = useNavigate()
	const [account, setAccount] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)
	// 事件處理
	const handleClick = () => {
		// 點擊登入發送 POST /api/users/login
		axios
			.post(API_URL + '/api/users/login', { email: account, password })
			.then(response => {
				// console.log(response)
				//如果成功就能取得token
				const token = response.data.data.token
				// 有拿到token就重新導向到首頁 前端頁面其實別暴露我們的id比較好！ 先放這樣之後再改
				if (token) {
					localStorage.setItem('token', token)
					setLogin(true)
					navigate('/tweet/:id')
				}
				//如果伺服器回傳錯誤會直接被丟到catch，所以沒有特別檢查 !token
			})
			.catch(err => {
				console.log(err)
				//此error來自伺服器的回傳
				setError(new Error('帳號或密碼錯誤'))
			})
	}
	useEffect(() => {
		if (error instanceof Error) {
			// alert後清空錯誤狀態，或是有其他顯示錯誤的方式我不是很確定AC要啥
			alert(error.message)
			setError(null)
		}
	}, [error])
	return (
		<div className={styles.container}>
			<div>
				<AcLogo />
			</div>
			<h3 className={styles.title}>登入Alphitter</h3>
			{/* AuthInput group */}
			<div className={styles['authinput-group']}>
				<AuthInput
					label="帳號"
					type="text"
					value={account}
					placeholder="請輸入帳號"
					onChange={setAccount}
				/>


				<AuthInput
					label="密碼"
					type="password"
					value={password}
					placeholder="請輸入密碼"
					onChange={setPassword}
				/>
			</div>
			<div className={styles['auth-button']} onClick={handleClick}>
				<Button styleName="lg-bg-logo">登入</Button>
			</div>
			{/* 超連結 */}
			<div className={styles['auth-link-box']}>
				<Link to="/register" className={styles['auth-link']}>
					<div className={styles['auth-link-text']}>註冊</div>
				</Link>
				<div className={styles['auth-link-dot']}>·</div>
				<Link to="/admin" className={styles['auth-link']}>
					<div className={styles['auth-link-text']}>後台登入</div>
				</Link>
			</div>
		</div>
	)
}

export default UserLoginPage
