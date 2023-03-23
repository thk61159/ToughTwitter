import styles from "./ProfilePageTitle.module.scss";
import { ReactComponent as ArrowPre } from "../../assets/icons/arrowPre.svg";

function ProfilePageTitle(props) {
  return (
    <div className={styles["container"]}>
      <div className={styles["arrow-img"]} >
        <ArrowPre />
      </div>
      <div className={styles["profile-title"]}>
        <div className={styles["user-name"]} >
          {'user1'}
        </div>
        <div className={styles["tweet-count"]}>{2} 貼文</div>
      </div>
    </div>
  );
}
export default ProfilePageTitle;
