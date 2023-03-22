import { Link } from "react-router-dom";
import styles from "./TweetInput.module.scss";
import TweetSubmitButton from "./TweetSubmitButton";
import { data } from "../../db.js";

function TweetInput() {
  return (
    <div className={styles["container"]}>
      <div className={styles["input-body"]}>
        <div className={styles["user-avatar"]}>
          <Link to={`/user/${data[0].id}`}>
            <img
              src={data[0].avatar}
              alt="avatar-img"
              className={styles["avatar-img"]}
            />
          </Link>
        </div>
        <textarea
          className={styles["input-textarea"]}
          placeholder="有什麼新鮮事?"
          onChange={(e) => e.target.value}
          value=""
        ></textarea>
      </div>
      <div className={styles["footer"]}>
        <div className={styles["error-message"]}></div>
        <div className={styles["tweet-btn"]}>
          <TweetSubmitButton />
        </div>
      </div>
    </div>
  );
}
export default TweetInput;
