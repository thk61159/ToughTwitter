import React from 'react';
import styles from './AdminUserCard.module.scss';
import { ReactComponent as TweetIcon } from '../../../assets/icons/tweet_feather_icon.svg';
import { ReactComponent as LikeIcon } from '../../../assets/icons/like_icon.svg';
import DefaultAvatar from '../../../assets/icons/AcLogo.svg'
import DefaultBackground from '../../../assets/icons/background.svg'

const AdminUserCard = ({ background, avatar, account, name, tweetsCount, followersCount, followingsCount, likesCount }) => {
  return (
		<div className={styles['user-card-container']}>
			<div className={styles['user-image-container']}>
				<img src={background || DefaultBackground} alt='background' className={styles['user-cover']} />
				<img src={avatar || DefaultAvatar} alt='avatar' className={styles['user-avatar']} />
			</div>
			<div className={styles['user-card-content']}>
				<h2 className={styles['user-name']}>{name}</h2>
				<p className={styles['user-account']}>@{account}</p>
				<div className={styles['user-card-social-media']}>
					<p>
						<TweetIcon />
						<span>{tweetsCount}</span>
					</p>
					<p>
						<LikeIcon />
						<span>{likesCount}</span>
					</p>
				</div>
				<div className={styles['user-card-social-media']}>
					<p>
						<strong>{followingsCount} 個</strong> 跟隨中
					</p>
					<p>
						<strong>{followersCount} 個</strong> 跟隨者
					</p>
				</div>
			</div>
		</div>
	)
};

export default AdminUserCard;
