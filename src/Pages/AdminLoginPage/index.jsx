import React, { useState } from 'react';
import axios from 'axios';
import styles from './AdminLoginPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants';

// Component
import { ReactComponent as AcLogo } from '../../assets/icons/AcLogo.svg';
import AuthInput from '../../Components/AuthInput/index';
import Button from '../../Components/Button';

function AdminLoginPage({ setUserData }) {
  const navigate = useNavigate();
  //狀態設置
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [note, setNote] = useState({});
  //事件處理
  const handleClick = () => {
    if (!password || !account) return setNote({ password: '請輸入帳號密碼' });

    axios
      .post(`${API_URL}/admin/login`, { account, password })
      .then((response) => {
        const { token, user } = response.data.data;

        if (token) {
          localStorage.setItem('token', token);
          setUserData({ token, user });
          navigate('/admin/userlist');
        }
        setNote({});
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setNote({ account: '帳號不存在！' });
        }
        if (error.response.status === 401) {
          setNote({ password: '帳號或密碼有誤' });
        }
      });
  };

  return (
    <div className={styles.container}>
      <div>
        <AcLogo />
      </div>
      <h3 className={styles.title}>後台登入</h3>
      {/* AuthInput group */}
      <div className={styles['authinput-group']}>
        <AuthInput label='帳號' type='text' value={account} placeholder='請輸入帳號' onChange={setAccount} note={note.account} />

        <AuthInput label='密碼' type='password' value={password} placeholder='請輸入密碼' onChange={setPassword} note={note.password} />
      </div>
      {/* 登入按鈕 */}
      <div className={styles['auth-button']} onClick={handleClick}>
        <Button styleName='lg-bg-logo'>登入</Button>
      </div>
      {/* 超連結 */}
      <div className={styles['auth-link-box']}>
        <Link to='/login' className={styles['auth-link']}>
          <div className={styles['auth-link-text']}>前台登入</div>
        </Link>
      </div>
    </div>
  );
}

export default AdminLoginPage;
