import styles from "./UserFollowBtn.module.scss";
function UserFollowBtn() {
  const handleAddFollow = () => {};
  // const handleDeleteFollow = () => {};

  return (
    <>
      {/* 暫時先隱藏一個，尚未做功能以及判斷式 */}
      <button className={styles["follow-btn"]} onClick={handleAddFollow}>
        跟隨
      </button>

      {/* <button className={styles["following-btn"]} onClick={handleDeleteFollow}>
        正在跟隨
      </button> */}
    </>
  );
}
export default UserFollowBtn;
