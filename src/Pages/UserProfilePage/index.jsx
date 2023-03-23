import styles from "./UserProfilePage.module.scss";
import ProfileUserNavBar from "../../Components/ProfileUserNavBar";
import UserTweetList from "../../Components/UserTweetList";

function UserProfilePage() {
  return (
    <div className={styles["container"]}>
      <ProfileUserNavBar />
      <div>
        <UserTweetList />
      </div>
    </div>
  );
}
export default UserProfilePage;
