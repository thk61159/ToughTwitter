import styles from "./UserSidebarContainer.module.scss";
import UserNavBar from "./UserNavBar";
function UserSidebarContainer() {
  return (
    <div className={styles["container"]}>
      <UserNavBar />
    </div>
  );
}

export default UserSidebarContainer;
