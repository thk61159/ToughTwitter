import React from "react";
import styles from "./LayoutUser.module.scss";

//維持中間區塊可以切換變動，其餘左右列固定
import { Outlet } from "react-router-dom";

//Components
import UserSidebarContainer from "../UserSidebarContainer";
import UserPopularBar from "../UserPopularBar";

function LayoutUser() {
  return (
    <div className={styles["layout-container"]}>
      <div className={styles["column-1"]}>
        <UserSidebarContainer />
      </div>
      <div className={styles["column-2"]}>
        <Outlet />
      </div>
      <div className={styles["column-3"]}>
        <UserPopularBar />
      </div>
    </div>
  );
}

export default LayoutUser;
