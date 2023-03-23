import styles from "./UserTweetBox.module.scss";
import { Link } from "react-router-dom";

import UserInfo from "./UserInfo";

import LikeFullIconButton from "../LikeFullIconButton";
import ReplyIconButton from "../ReplyIconButton";

// import LikeIconButton from "../LikeIconButton";

function UserTweetBox({ data }) {
	const d = JSON.parse(JSON.stringify(data))
	const id = d.UserId
  return (
		<div className={styles['container']}>
			<div className={styles['user-avatar']}>
				<Link
					to={{ pathname: `/user/${d.poster.account}`, state: { data: id } }}
				>
					<img
						src={d.poster.avatar}
						className={styles['avatar-img']}
						alt="avatar-img"
					/>
				</Link>
			</div>
			<div className={styles['tweet-user-info']}>
				<UserInfo d={d} />
				<div className={styles['tweet-content']}>
					<Link to={`/tweet/${d.id}`} className={styles['tweet-content-link']}>
						<img src={d.image} alt="" />
						<div>{d.description}</div>
					</Link>
				</div>
				<div className={styles['tweet-social-list']}>
					<div className={styles['tweet-social-group']}>
						<div className={styles['reply-link']}>
							<ReplyIconButton />
						</div>
						<p className={styles['reply-number']}>{d.Replies}</p>
					</div>
					<div className={styles['tweet-social-group']}>
						{/* <div className={styles["like-btn"]}>
              <LikeIconButton />
            </div> */}
						<div className={styles['like-btn']}>
							<LikeFullIconButton id={d.id} />
						</div>
						<p className={styles['like-number']}>{d.Likes}</p>
					</div>
				</div>
			</div>
		</div>
	)

}
export default UserTweetBox;
