import { ReactComponent as TweetIcon } from '../../../assets/icons/tweet_feather_icon.svg';
import { ReactComponent as LikeIcon } from '../../../assets/icons/like_icon.svg';
import styles from './AdminUserCard.module.scss';

const AdminUserCard = ({ cover, avatar, account, name, tweetCount, followerCount, followingCount, likeCount }) => {
  return (
    <div className={styles['user-card-container']}>
      <div className={styles['user-image-container']}>
        <img src={cover} alt='cover' className={styles['user-cover']} />
        <img src={avatar} alt='avatar' className={styles['user-avatar']} />
      </div>
      <div className={styles['user-card-content']}>
        <h2 className={styles['user-name']}>{name}</h2>
        <p className={styles['user-account']}>@{account}</p>
        <div className={styles['user-card-social-media']}>
          <p>
            <TweetIcon />
            <span>{tweetCount}</span>
          </p>
          <p>
            <LikeIcon />
            <span>{likeCount}</span>
          </p>
        </div>
        <div className={styles['user-card-social-media']}>
          <p>
            <strong>{followingCount} 個</strong> 跟隨中
          </p>
          <p>
            <strong>{followerCount} 個</strong> 跟隨者
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminUserCard;
