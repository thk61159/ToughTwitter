import styles from './AdminUserCards.module.scss';
import AdminUserCard from './AdminUserCard';

const dummyUsers = [
  {
    id: 4,
    avatar: 'https://loremflickr.com/320/240/man,woman/?lock=22',
    cover: 'https://i.imgur.com/WFcXd3Y.png',
    tweetCount: '1.5k',
    followerCount: 56,
    followingCount: 236,
    likeCount: '4k',
    account: 'heyjohn',
    name: 'John Doe'
  },
  {
    id: 4,
    avatar: 'https://loremflickr.com/320/240/man,woman/?lock=22',
    cover: 'https://i.imgur.com/WFcXd3Y.png',
    tweetCount: '1.5k',
    followerCount: 136,
    followingCount: 136,
    likeCount: '4k',
    account: 'heyjohn',
    name: 'John Doe'
  },
  {
    id: 4,
    avatar: 'https://loremflickr.com/320/240/man,woman/?lock=22',
    cover: 'https://i.imgur.com/WFcXd3Y.png',
    tweetCount: '1.5k',
    followerCount: 136,
    followingCount: 136,
    likeCount: '4k',
    account: 'heyjohn',
    name: 'John Doe'
  },
  {
    id: 4,
    avatar: 'https://loremflickr.com/320/240/man,woman/?lock=22',
    cover: 'https://i.imgur.com/WFcXd3Y.png',
    tweetCount: '1.5k',
    followerCount: 136,
    followingCount: 136,
    likeCount: '4k',
    account: 'heyjohn',
    name: 'John Doe'
  },
  {
    id: 4,
    avatar: 'https://loremflickr.com/320/240/man,woman/?lock=22',
    cover: 'https://i.imgur.com/WFcXd3Y.png',
    tweetCount: '1.5k',
    followerCount: 136,
    followingCount: 136,
    likeCount: '4k',
    account: 'heyjohn',
    name: 'John Doe'
  }
];
const AdminUserCards = () => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>使用者列表</h1>
      <main className={styles['user-cards']}>
        {dummyUsers.map((user) => (
          <AdminUserCard {...user} />
        ))}
      </main>
    </div>
  );
};

export default AdminUserCards;
