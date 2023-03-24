import React, { useEffect, useState } from 'react'
import styles from './App.module.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Page
import UserLoginPage from './Pages/UserLoginPage'
import RegisterPage from './Pages/RegisterPage'
import AdminLoginPage from './Pages/AdminLoginPage'
import SettingPage from './Pages/SettingPage'
import LayoutUser from './Components/LayoutUser'
import HomePage from './Pages/HomePage'
import UserProfilePage from './Pages/UserProfilePage'
import Test from './Pages/Test'
//components
import AuthNav from './Components/AuthNav'
import MyContext from './Components/MyContext'

const basename = process.env.PUBLIC_URL

function App() {
	let [userData, setUserData] = useState('')
	useEffect(() => {
		// localStorage.removeItem('token')
	}, [])
	return (
		<div className={styles.App}>
			<BrowserRouter basename={basename}>
				<MyContext.Provider value={userData}>
					<Routes>
						{/* 用一個nav去處理確認登入狀態的事件 ， 非登入者就重新導向到 /login*/}
						<Route
							path="/"
							element={
								<AuthNav userData={userData} setUserData={setUserData} />
							}
						>
							<Route
								path="login"
								element={<UserLoginPage setUserData={setUserData} />}
							></Route>
							<Route path="admin" element={<AdminLoginPage />}></Route>
							<Route path="register" element={<RegisterPage />}></Route>
							<Route path="setting" element={<SettingPage />}></Route>
							{/* 後端還沒用top followers所以先不管LayoutUser */}
							<Route path="home" element={<LayoutUser />}>
								<Route index element={<HomePage />}></Route>
							</Route>

							<Route path="test" element={<Test />}></Route>
						</Route>
					</Routes>
				</MyContext.Provider>
			</BrowserRouter>
		</div>
	)
}

export default App
