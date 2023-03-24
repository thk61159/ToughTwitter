import { useState } from "react";
import styles from "./UserPopularList.module.scss";
import UserPopularCard from "./UserPopularCard";

function UserPopularList() {
  const [topFollower, setTopFollower] = useState(data);
  const data = {}
  return (
    <div className={styles["container"]}>
      <h4 className={styles["popular__title"]}>推薦跟隨</h4>
      <div className={styles["popular__user-list"]}>
        {topFollower &&
          topFollower?.map((user) => (
            <UserPopularCard
              key={user?.id}
              userID={user?.id}
              accountName={user?.account}
              userName={user?.name}
              isFollowed={user?.isFollowing}
              avatar={user?.avatar}
              // currentUserID={currentUserID}
              setTopFollower={setTopFollower}
            />
          ))}
      </div>
    </div>
  );
}
export default UserPopularList;
