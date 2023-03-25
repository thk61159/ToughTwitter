import React from 'react'
import Alert from '../Components/Alert'
import AuthInput from '../Components/AuthInput'
// import AuthNav from '../Components/AuthNav'
import Button from '../Components/Button'
import LayoutUser from '../Components/LayoutUser'
import LikeFullIconButton from '../Components/LikeFullIconButton'
import LikeIconButton from '../Components/LikeIconButton'
import ProfileEditButton from '../Components/ProfileEditButton'
import ProfileInfo from '../Components/ProfileInfo'
import ProfileNavLink from '../Components/ProfileNavLink'
import ProfilePageTitle from '../Components/ProfilePageTitle'
import ProfileUserNavBar from '../Components/ProfileUserNavBar'
import ReplyIconButton from '../Components/ReplyIconButton'
import ReplyModal from '../Components/ReplyModal'
import TweetInput from '../Components/TweetInput'
import TweetSubmitButton from '../Components/TweetInput/TweetSubmitButton'
import UserFollowButton from '../Components/UserFollowButton'
import UserPopularBar from '../Components/UserPopularBar'
import UserPopularList from '../Components/UserPopularBar/UserPopularList'
import UserPopularCard from '../Components/UserPopularBar/UserPopularList/UserPopularCard'
import UserSidebarContainer from '../Components/UserSidebarContainer'
import UserNavBar from '../Components/UserSidebarContainer/UserNavBar'
import LogoutButton from '../Components/UserSidebarContainer/UserNavBar/LogoutButton'
import NavBarItem from '../Components/UserSidebarContainer/UserNavBar/NavBarItem'
import TweetButtonSideBar from '../Components/UserSidebarContainer/UserNavBar/TweetButtonSideBar'
import UserTweetBox from '../Components/UserTweetBox'
import UserInfo from '../Components/UserTweetBox/UserInfo'
import UserTweetList from '../Components/UserTweetList'




const Test = () => {
  return (
		<div>
			<p>Alert</p>
			<Alert />
			<p>AuthInput</p>
			<AuthInput />
			<p>Button</p>
			<Button />
			{/* <LayoutUser /> */}
			<p>LikeFullIconButton</p>
			<LikeFullIconButton />
			<p>LikeIconButton</p>
			<LikeIconButton />
			<p>ProfileEditButton</p>
			<ProfileEditButton />
			<p>ProfileInfo</p>
			<ProfileInfo />
			<p>ProfileNavLink</p>
			<ProfileNavLink />
			<p>ProfilePageTitle</p>
			<ProfilePageTitle />
			<p>ProfileUserNavBar</p>
			<ProfileUserNavBar />
			<p>ReplyIconButton</p>
			<ReplyIconButton />
			{/* <ReplyModal /> */}
			{/* <TweetInput /> */} {/* 這個應該是沒問題！！ */}
			<p>TweetSubmitButton</p>
			<TweetSubmitButton />
			<p>UserFollowButton</p>
			<UserFollowButton />
			{/* <UserPopularList /> */}
			{/* <UserPopularBar /> */}
			<p>UserPopularCard</p>
			<UserPopularCard />
			<p>UserSidebarContainer</p>
			<UserSidebarContainer />
			<p>UserNavBar</p>
			<UserNavBar />
			<p>LogoutButton</p>
			<LogoutButton />
			<p>NavBarItem</p>
			<NavBarItem />
			<p>TweetButtonSideBar</p>
			<TweetButtonSideBar />
			{/* <UserTweetBox /> */} {/* 這個應該是沒問題！！ */}
			{/* <UserInfo/> */} {/* 這個應該是沒問題！！ */}
			{/* <UserTweetList /> */} {/* 這個應該是沒問題！！ */}
		</div>
	)
}

export default Test