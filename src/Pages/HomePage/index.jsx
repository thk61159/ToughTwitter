import React, { useState,useContext } from 'react'
import styles from "./HomePage.module.scss";
import MyContext from '../../Components/MyContext';
import TweetInput from "../../Components/TweetInput";
import HomeTweetList from '../../Components/HomeTweetList'
function HomePage() {
	let [post, setPost] = useState(false)
	const { userData } = useContext(MyContext)
	const { user,token } = userData

  return (
		<div className={styles['container']}>
			<div className={styles['page-title']}>首頁</div>
			<div className={styles['tweet-input']}>{userData && <TweetInput setPost={setPost} user={user} token={token} />}</div>
			<div className={styles['tweet-list']}>
				<HomeTweetList post={post} setPost={setPost} />
			</div>
		</div>
	)

}

export default HomePage;
