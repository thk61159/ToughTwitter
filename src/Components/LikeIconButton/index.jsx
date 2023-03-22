import styles from "./LikeIconButton.module.scss";
import { ReactComponent as Like } from "../../assets/icons/like_icon.svg";
function LikeIconButton(props) {

  return (
    <div className={styles["container"]}>
      <Like className={styles[1]} />
    </div>
  );
}
export default LikeIconButton;
