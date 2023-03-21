import styles from "./UserPopularCard.module.scss";
import DefaultAvatar from "../../../../assets/icons/AcLogo.svg";
import { Link } from "react-router-dom";
import UserFollowBtn from "../../../UserFollowButton";
function PopularUserCard({
  userName,
  accountName,
  avatar,
  userID,
  isFollowed,
  setTopFollower,
}) {
  return (
    <div className={styles["container"]}>
      <Link to={`/user/${userID}`}>
        <img
          src={avatar ? avatar : DefaultAvatar}
          alt="user-avatar"
          className={styles["user-avatar"]}
        />
      </Link>
      <div className={styles["user-info"]}>
        <p className={styles["user-name"]}>
          {userName ? userName : "Pizza Hut"}
        </p>
        <p className={styles["user-account"]}>
          {accountName ? `@${accountName}` : "@pizzahut"}
        </p>
      </div>

      <UserFollowBtn />
    </div>
  );
}
export default PopularUserCard;
