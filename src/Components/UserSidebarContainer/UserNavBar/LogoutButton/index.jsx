import { useContext } from "react";
import styles from "./LogoutButton.module.scss";
import MyContext from "../../../MyContext";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Logout } from "../../../../assets/icons/logout.svg";

function LogoutButton() {
  const {updateUserData,updateBrowsingUser} = useContext(MyContext)
  const navigate = useNavigate()
  const logout = () => {
		updateUserData(null)
		updateBrowsingUser(null)
		localStorage.removeItem('token')
		navigate('/login')
	}
  return (
		<div className={styles['container']} onClick={logout}>
			<NavLink className={styles['navlink-logo']}>
				<Logout />
			</NavLink>
			<NavLink className={styles['navlink-title']}>登出</NavLink>
		</div>
	)
}

export default LogoutButton;
