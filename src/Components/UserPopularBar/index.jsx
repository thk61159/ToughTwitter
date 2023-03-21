import styles from "./UserPopularBar.module.scss";
import PopularUserList from "./UserPopularList";
function UserPopularBar() {
  return (
    <div className={styles["container"]}>
      <PopularUserList />
    </div>
  );
}

export default UserPopularBar;
