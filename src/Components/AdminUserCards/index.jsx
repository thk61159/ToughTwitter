import React from 'react';
import styles from './AdminUserCards.module.scss';
import AdminUserCard from './AdminUserCard';

const AdminUserCards = ({ data }) => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>使用者列表</h1>
      <main className={styles['user-cards']}>
        {data.map((d) => (
          <AdminUserCard key={d.id} {...d} />
        ))}
      </main>
    </div>
  );
};

export default AdminUserCards;
