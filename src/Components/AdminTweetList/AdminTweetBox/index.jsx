import React from 'react';
import styles from './AdminTweetBox.module.scss';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/admin_cross.svg'
import { timestamp } from '../../../utils';

const AdminTweetBox = ({ id, avatar, name, account, time, description, deleteTweet }) => {

  return (
    <div className={styles['tweet-container']}>
      <div className={styles['tweet-image-container']}>
        <img src={avatar} alt='avatar' />
      </div>
      <div className={styles['tweet-content']}>
        <p className={styles['tweet-user-info']}>
          <span>{name}</span>
          <span>@{account}・{timestamp(time)}</span>
        </p>
        <p className={styles['tweet-description']}>{description}</p>
      </div>
      <DeleteIcon onClick={() => deleteTweet(id)} />
    </div>
  );
};

export default AdminTweetBox;
