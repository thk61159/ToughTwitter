import styles from "./LogoutButton.module.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logout } from "../../../../assets/icons/logout.svg";

function LogoutButton() {
  return (
    <div className={styles["container"]}>
      <NavLink className={styles["navlink-logo"]}>
        <Logout />
      </NavLink>
      <NavLink className={styles["navlink-title"]}>登出</NavLink>
    </div>
  );
}

export default LogoutButton;
