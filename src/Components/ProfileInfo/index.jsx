import styles from './ProfileInfo.module.scss';
import ProfileEditButton from '../ProfileEditButton';

import { Link } from 'react-router-dom'; //按到追隨者、追隨中轉址用
function ProfileInfo({ d }) {
  return (
    <div className={styles['container']}>
      <div className={styles['user-avatar']}>
        <img src={d.avatar ? d.avatar : 'https://loremflickr.com/320/240?lock=3'} alt='user-avatar' className={styles['avatar-img']} />
      </div>
      <div className={styles['user-detail']}>
        {/* 太神了 */}
        <ProfileEditButton currentUser={d.currentUser} />
        <div className={styles['user-info']}>
          <p className={styles['user-name']}>{d.name}</p>
          <p className={styles['user-account']}>@{d.account}</p>
        </div>
        <div className={styles['user-description']}></div>
        <div className={styles['user-track-info']}>
          <div className={styles['user-following']}>
            <Link to={`/${d.id}/followings`} className={styles['number-link']}>
              {d.followingsCounts}
            </Link>
            <p className={styles['note']}>個跟隨中</p>
          </div>
          <div className={styles['user-followers']}>
            <Link to={`/${d.id}/followers`} className={styles['number-link']}>
              {d.followersCounts}
            </Link>
            <p className={styles['note']}>位跟隨者</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
