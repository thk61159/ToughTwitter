import styles from './AdminTweetList.module.scss';
import AdminTweetBox from './AdminTweetBox';
import DefaultAvatar from '../../assets/icons/AcLogo.svg'

const AdminTweetList = ({ data, deleteTweet }) => {

  return (
		<div className={styles['container']}>
			<h1 className={styles['title']}>推文清單</h1>
			<main className={styles['user-tweets']}>
				{data.map(d => (
					<AdminTweetBox key={d.id} id={d.id} avatar={d.poster.avatar || DefaultAvatar} account={d.poster.account} name={d.poster.name} description={d.description} time={d.createdAt} deleteTweet={deleteTweet} />
				))}
			</main>
		</div>
	)
};

export default AdminTweetList;
