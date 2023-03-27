import React, { useState } from 'react'
import styles from "./HomePage.module.scss";
import TweetInput from "../../Components/TweetInput";
import HomeTweetList from '../../Components/HomeTweetList'
function HomePage() {
	let [post, setPost] = useState(false)
  return (
		<div className={styles['container']}>
			<div className={styles['page-title']}>首頁</div>
			<div className={styles['tweet-input']}>
				<TweetInput setPost={setPost} />
			</div>
			<div className={styles['tweet-list']}>
				<HomeTweetList post={post} setPost={setPost} />
			</div>
		</div>
	)

}

export default HomePage;
