import { useContext, useEffect, useState } from 'react';

import styles from './AdminUserPage.module.scss'
import { Myaxios } from '../../constants';
import MyContext from '../../Components/MyContext';
import { takeErrMsg } from '../../utils';

import AdminUserCards from '../../Components/AdminUserCards';
import AdminSideBar from '../../Components/AdminSideBar';

function AdminUserPage() {
  const [Data, setData] = useState(null);
  const { userData } = useContext(MyContext);
  const { token } = userData

  useEffect(() => {
    if (!Data) {
      Myaxios(token)
				.get(`admin/users`)
				.then(e => {
					setData(e.data)
				})
				.catch(err => console.error(takeErrMsg(err)))
    }
  }, []);

  return (
		<div className={styles['container']}>
			<div className={styles['column-1']}>
				<AdminSideBar />
			</div>
			<div className={styles['column-2']}>{Data && <AdminUserCards data={Data} />}</div>
		</div>
	)
}

export default AdminUserPage;
