
import styles from "./LogoutButton.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Logout } from "../../../../assets/icons/logout.svg";

function LogoutButton() {
  const navigate = useNavigate()
  const logout = (e) => {
    console.log(e.target)
    navigate('/login')
    localStorage.removeItem('token')
    
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
