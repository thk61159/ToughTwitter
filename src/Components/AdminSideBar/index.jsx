import React from 'react';
import styles from './AdminSideBar.module.scss';
import AdminNavBar from './AdminNavBar';

const AdminSideBar = () => {
  return (
    <div className={styles['container']}>
      <AdminNavBar />
    </div>
  );
};

export default AdminSideBar;
