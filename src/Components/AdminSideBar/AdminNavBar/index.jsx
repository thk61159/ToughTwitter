import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AdminNavBar.module.scss';
import { ReactComponent as AcLogo } from '../../../assets/icons/AcLogo.svg';
import { ReactComponent as House } from '../../../assets/icons/house.svg';
import { ReactComponent as HouseActive } from '../../../assets/icons/house_Full.svg';
import { ReactComponent as Head } from '../../../assets/icons/head.svg';
import { ReactComponent as HeadActive } from '../../../assets/icons/head_Full.svg';
import NavBarItem from '../../UserSidebarContainer/UserNavBar/NavBarItem';
import LogoutButton from '../../UserSidebarContainer/UserNavBar/LogoutButton';

function AdminNavBar() {
  return (
    <div className={styles['container']}>
      <AcLogo className={styles['navbar-logo']} />
      <NavBarItem>
        <NavLink to={'/admin/tweets'} className={({ isActive }) => [`${styles['navbar-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')} end>
          <House className={styles['navbar-link__logo']} />
          <HouseActive className={styles['navbar-link__logo-active']} />
        </NavLink>
        <NavLink to={'/admin/tweets'} className={({ isActive }) => [`${styles['navbar-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')} end>
          {' '}
          <p className={styles['navbar-link__title']}>推文清單</p>
        </NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink to={'/admin/users'} className={({ isActive }) => [`${styles['navbar-link']}`, isActive ? `${styles['router-link-active']}` : ``].join(' ')} end>
          <Head className={styles['navbar-link__logo']} />
          <HeadActive className={styles['navbar-link__logo-active']} />
          <p className={styles['navbar-link__title']}>使用者列表</p>
        </NavLink>
      </NavBarItem>
      <div className={styles['logout-btn']}>
        <LogoutButton />
      </div>
    </div>
  );
}
export default AdminNavBar;
