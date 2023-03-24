import React, { useState } from 'react'
import styles from './App.module.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Page

import UserLoginPage from './Pages/UserLoginPage'
import RegisterPage from './Pages/RegisterPage'
import AdminLoginPage from './Pages/AdminLoginPage'
import SettingPage from './Pages/SettingPage'
import LayoutUser from './Components/LayoutUser'
import HomePage from './Pages/HomePage'
import UserProfilePage from'./Pages/UserProfilePage'
//components
import AuthNav from './Components/AuthNav'

const basename = process.env.PUBLIC_URL
function App() {
	let [Login, setLogin] = useState(false)
	return (
    <div className={styles.App}>
      <BrowserRouter basename={basename}>
        <Routes>
          {/* 用一個nav去處理確認登入狀態的事件 ， 非登入者就重新導向到 /login*/}
          <Route path="/" element={<AuthNav Login={Login} />}>
            {/* 暫時先設定為login，還沒使用useNavigate跳轉 */}
            {/* <Route index element={<UserLoginPage />}></Route> */}
            <Route
              path="login"
              element={<UserLoginPage setLogin={setLogin} />}
            ></Route>
            <Route path="admin" element={<AdminLoginPage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route path="setting" element={<SettingPage />}></Route>
            {/* 後端還沒用top followers所以先不管LayoutUser */}
            <Route path="home" element={<LayoutUser />}>
              <Route index element={<HomePage />}></Route>
            </Route>
            <Route path="/user/:username" element={<LayoutUser />}>
              <Route index element={<UserProfilePage />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
