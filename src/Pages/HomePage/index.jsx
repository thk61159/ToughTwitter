import styles from "./HomePage.module.scss";
import TweetInput from "../../Components/TweetInput";
import UserTweetList from "../../Components/UserTweetList";
function HomePage() {
  return (
    <div className={styles["container"]}>
      <div className={styles["page-title"]}>首頁</div>
      <div className={styles["tweet-input"]}>
        <TweetInput />
      </div>
      <div className={styles["tweet-list"]}>
        <UserTweetList />
      </div>
    </div>
  );
}

export default HomePage;
