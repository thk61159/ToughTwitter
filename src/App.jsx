import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

//Page
import UserLoginPage from './Pages/UserLoginPage';
import RegisterPage from './Pages/RegisterPage';
import AdminLoginPage from './Pages/AdminLoginPage';
import AdminUserPage from './Pages/AdminUserPage';
import AdminTweetPage from './Pages/AdminTweetPage';
import SettingPage from './Pages/SettingPage';
import HomePage from './Pages/HomePage';
import TweetPage from './Pages/TweetPage';
import UserProfilePage from './Pages/UserProfilePage';
import UserProfileLike from './Pages/UserProfileLike';
import UserProfileReply from './Pages/UserProfileReply';
import UserProfileFollowship from './Pages/UserProfileFollowship';

import Test from './Pages/Test';
//components
import Layout from './Components/Layout';
import LayoutUser from './Components/LayoutUser';
import AuthNav from './Components/AuthNav';
import MyContext from './Components/MyContext';

const basename = process.env.PUBLIC_URL;

function App() {
  let [userData, setUserData] = useState(null);
  function NotFound() {
    console.log('404');
    const navigate = useNavigate();
    navigate('/login');
  }

  return (
    <div className={styles.App}>
      <BrowserRouter basename={basename}>
        <MyContext.Provider value={userData}>
          <Routes>
            {/* 用一個nav去處理確認登入狀態的事件 ， 非登入者就重新導向到 /login*/}
            <Route path='/' element={<AuthNav userData={userData} setUserData={setUserData} />}>
              {/* <Route path='/'> */}
              <Route path='login' element={<UserLoginPage setUserData={setUserData} />}></Route>
              <Route path='admin'>
                <Route index element={<AdminLoginPage setUserData={setUserData} />}></Route>
                <Route path='users' element={userData && <AdminUserPage />}></Route>
                <Route path='tweets' element={userData && <AdminTweetPage />}></Route>
              </Route>
              <Route path='register' element={<RegisterPage />}></Route>

              <Route path='setting' element={userData && <SettingPage />}></Route>
              <Route path='home' element={userData && <Layout />}>
                <Route index element={userData && <HomePage />}></Route>
              </Route>
              <Route path='/:account' element={userData && <LayoutUser />}>
                <Route index element={userData && <UserProfilePage />}></Route>
                <Route path='/:account/replies' element={userData && <UserProfileReply />}></Route>
                {/* 需要修改UserReplyBox樣式 */}
                <Route path='/:account/likes' element={userData && <UserProfileLike />}></Route>
                {/* 需要修改UserLikeBox樣式 */}
                <Route path='/:account/following' element={userData && <UserProfileFollowship />}></Route>
                {/* 需要修改UserFollowshipBox樣式 */}
                {/* <Route path='/:account/follower' element={userData && <UserProfileLike />}></Route> */}
              </Route>
              <Route path='/tweet/:tweet_id' element={userData && <Layout />}>
                <Route index element={userData && <TweetPage />}></Route>
                {/* 需要修改TweetReplyBox樣式 */}
              </Route>

              <Route path='/useajkhfcal' element={userData && <LayoutUser />}>
                <Route index element={userData && <UserProfilePage />}></Route>
              </Route>
              <Route path='test' element={userData && <Test />}></Route>
            </Route>
            <Route path='*' component={NotFound} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
