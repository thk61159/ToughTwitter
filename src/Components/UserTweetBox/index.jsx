import styles from "./UserTweetBox.module.scss";
import { Link } from "react-router-dom";

import UserInfo from "./UserInfo";

import LikeFullIconButton from "../LikeFullIconButton";
import ReplyIconButton from "../ReplyIconButton";
import LikeIconButton from "../LikeIconButton";

function UserTweetBox({ data }) {
  const temp = JSON.stringify(data)
  const parsedData = JSON.parse(temp)
  return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link to={`/user/${parsedData.UserId}`}>
					{/* 後端忘記放avatare了 */}
					<img
						src={'https://loremflickr.com/320/240?lock=2'}
						className={styles['avatar-img']}
						alt="avatar-img"
					/>
				</Link>
			</div>
			<div className={styles['tweet-user-info']}>
				<UserInfo userInfo={parsedData.User} />
				<div className={styles['tweet-content']}>
					<Link
						to={`/tweet/${parsedData.id}`}
						className={styles['tweet-content-link']}
					>
						<img src={parsedData.image} alt="" />
						<div>{parsedData.description}</div>
					</Link>
				</div>
				<div className={styles['tweet-social-list']}>
					<div className={styles['tweet-social-group']}>
						<div className={styles['reply-link']}>
							<ReplyIconButton />
						</div>
						<p className={styles['reply-number']}>{parsedData.Replies}</p>
					</div>
					<div className={styles['tweet-social-group']}>
						{/* <div className={styles["like-btn"]}>
              <LikeIconButton />
            </div> */}
						<div className={styles['like-btn']}>
							<LikeFullIconButton />
						</div>
						<p className={styles['like-number']}>{parsedData.Likes}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default UserTweetBox;
