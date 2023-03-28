import styles from "./TweetButtonSideBar.module.scss";
import Button from "../../../Button";

function TweetButtonSideBar() {
  return (
		<div className={styles['container']}>
			<Button styleName={'lg-bg-logo'}>
				推文
			</Button>
		</div>
	)
}

export default TweetButtonSideBar;
