import React from "react";
import UserNavBar from "./UserNavBar";
import LogoutButton from "./UserNavBar/LogoutButton";
function UserSidebarContainer() {
	
  return (
		<div style={{ marginLeft: '9vw', width: '12.4vw' }}>
			<UserNavBar />
			<div style={{ position: 'fixed', bottom: '16px' }}>
				<LogoutButton />
			</div>
		</div>
	)
}

export default UserSidebarContainer;
