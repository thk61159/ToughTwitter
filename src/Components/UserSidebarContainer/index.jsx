import UserNavBar from "./UserNavBar";
import LogoutButton from "./UserNavBar/LogoutButton";
function UserSidebarContainer() {
  return (
		<div>
			<UserNavBar />
			<div style={{position:'fixed', bottom:'16px'}}>
				<LogoutButton />
			</div>
		</div>
	)
}

export default UserSidebarContainer;