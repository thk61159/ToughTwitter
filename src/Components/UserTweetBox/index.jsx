import styles from "./UserTweetBox.module.scss";
import { Link } from "react-router-dom";

import UserInfo from "./UserInfo";

import LikeFullIconButton from "../LikeFullIconButton";
import ReplyIconButton from "../ReplyIconButton";
import LikeIconButton from "../LikeIconButton";

function UserTweetBox(props) {
  return (
    <div className={styles["container"]}>
      <div className={styles["user-avatar"]}>
        <Link to={`/user/id:`}>
          <img
            src={"https://loremflickr.com/320/240?lock=2"}
            className={styles["avatar-img"]}
            alt="avatar-img"
          />
        </Link>
      </div>
      <div className={styles["tweet-user-info"]}>
        <UserInfo />
        <div className={styles["tweet-content"]}>
          <Link to={`/tweet/${2}`} className={styles["tweet-content-link"]}>
            {2}
          </Link>
        </div>
        <div className={styles["tweet-social-list"]}>
          <div className={styles["tweet-social-group"]}>
            <div className={styles["reply-link"]}>
              <ReplyIconButton />
            </div>
            <p className={styles["reply-number"]}>{2}</p>
          </div>
          <div className={styles["tweet-social-group"]}>
            {/* <div className={styles["like-btn"]}>
              <LikeIconButton />
            </div> */}
            <div className={styles["like-btn"]}>
              <LikeFullIconButton />
            </div>
          <p className={styles["like-number"]}>{2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserTweetBox;
