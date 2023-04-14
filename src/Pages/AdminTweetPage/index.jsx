import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './AdminTweetPage.module.scss'
import MyContext from '../../Components/MyContext';
import { Myaxios, takeErrMsg } from '../../utils'

import AdminSideBar from '../../Components/AdminSideBar';
import AdminTweetList from '../../Components/AdminTweetList';

function AdminTweetPage() {
  const [Data, setData] = useState('');
  const navigate = useNavigate();
  const { userData } = useContext(MyContext);
  const { token } = userData

  useEffect(() => {
    // if (!Data) {
      Myaxios(token)
				.get(`admin/tweets`)
				.then(e => {
					setData(e.data)
				})
				.catch(err => console.error(takeErrMsg(err)))
    // }
  }, []);

  const handleDeleteTweet = (id) => {
    Myaxios(token)
			.delete(`admin/tweets/${id}`)
			.then(e => {
				setData(prevData => prevData.filter(d => d.id !== id))
				navigate('/admin/tweets')
			})
			.catch(err => console.error(takeErrMsg(err)))
  };

  return (
		<div className={styles['container']}>
			<dir className={styles['column-1']}>
				<AdminSideBar />
			</dir>
			<div className={styles['column-2']}>{Data && <AdminTweetList data={Data} deleteTweet={handleDeleteTweet} />}</div>
		</div>
	)
}

export default AdminTweetPage;
