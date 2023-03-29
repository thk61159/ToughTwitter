import React, { useEffect, useState } from 'react'
import styles from './App.module.scss'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom'


//Page
import UserLoginPage from './Pages/UserLoginPage'
import RegisterPage from './Pages/RegisterPage'
import AdminLoginPage from './Pages/AdminLoginPage'
import AdminUserPage from './Pages/AdminUserPage'
import SettingPage from './Pages/SettingPage'
import HomePage from './Pages/HomePage'
import TweetPage from './Pages/TweetPage'
import UserProfilePage from './Pages/UserProfilePage'
import UserProfileLike from './Pages/UserProfileLike'
import UserProfileReply from './Pages/UserProfileReply'
import UserProfileFollowship from './Pages/UserProfileFollowship'

import Test from './Pages/Test'
//components
import Layout from './Components/Layout'
import LayoutUser from './Components/LayoutUser'
import AuthNav from './Components/AuthNav'
import MyContext from './Components/MyContext'
import ProfileContext from './Components/ProfileContext'

const basename = process.env.PUBLIC_URL

function App() {
	let [userData, setUserData] = useState(null)
	let [BrowsingUser, setBrowsingUser] = useState(null)
	const updateUserData = newValue => {
		setUserData(newValue)
		console.log(userData, 'userData在react更新')
	}
	const updateBrowsingUser = newValue => {
		setBrowsingUser(newValue)
	}
	useEffect(() => {}, [userData, BrowsingUser])
	return (
		<div className={styles.App}>
			<BrowserRouter basename={basename}>
				<MyContext.Provider value={{ userData, updateUserData, BrowsingUser, updateBrowsingUser }}>
					<ProfileContext.Provider value={BrowsingUser}>
						<Routes>
							{/* 用一個nav去處理確認登入狀態的事件 ， 非登入者就重新導向到 /login*/}
							<Route path='/' element={<AuthNav />}>
								<Route path='login' element={<UserLoginPage />}></Route>
								<Route path='admin' element={<AdminLoginPage />}></Route>
								<Route path='admin/userlist' element={<AdminUserPage />}></Route>
								<Route path='register' element={<RegisterPage />}></Route>
								<Route path='/' element={userData && <Layout />}>
									<Route path='home' element={userData && <HomePage />}></Route>
									<Route path='setting' element={userData && <SettingPage />}></Route>
								</Route>
								<Route path='/:account' element={userData && <LayoutUser />}>
									<Route index element={BrowsingUser && <UserProfilePage />}></Route>
									<Route path='/:account/replies' element={BrowsingUser && <UserProfileReply />}></Route>
									<Route path='/:account/likes' element={BrowsingUser && <UserProfileLike />}></Route>
									<Route path='/:account/followings' element={BrowsingUser && <UserProfileFollowship />}></Route>
									<Route path='/:account/followers' element={BrowsingUser && <UserProfileFollowship />}></Route>
								</Route>
								<Route path='/tweet/:tweet_id' element={userData && <Layout />}>
									<Route index element={userData && <TweetPage />}></Route>
									{/* 需要修改TweetReplyBox樣式 */}
								</Route>
							</Route>
						</Routes>
					</ProfileContext.Provider>
				</MyContext.Provider>
			</BrowserRouter>
		</div>
	)
}

export default App
