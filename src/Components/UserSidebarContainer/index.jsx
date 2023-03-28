import UserNavBar from "./UserNavBar";
import LogoutButton from "./UserNavBar/LogoutButton";
function UserSidebarContainer() {
  return (
		<div style={{ marginLeft: '7.5vw', width: '12.7vw' }}>
			<UserNavBar />
			<div style={{ position: 'fixed', bottom: '16px' }}>
				<LogoutButton />
			</div>
		</div>
	)
}

export default UserSidebarContainer;
