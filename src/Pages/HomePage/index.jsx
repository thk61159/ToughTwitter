import styles from "./HomePage.module.scss";
import TweetInput from "../../Components/TweetInput";
import HomeTweetList from '../../Components/HomeTweetList'
function HomePage() {
  return (
		<div className={styles['container']}>
			<div className={styles['page-title']}>首頁</div>
			<div className={styles['tweet-input']}>
				<TweetInput />
			</div>
			<div className={styles['tweet-list']}>
				<HomeTweetList />
			</div>
		</div>
	)

}

export default HomePage;
