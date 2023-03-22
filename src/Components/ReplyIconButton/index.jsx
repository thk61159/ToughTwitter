import styles from "./ReplyIconButton.module.scss";
import { ReactComponent as Reply } from "../../assets/icons/reply_icon.svg";
// import ReplyModal from "../ReplyModal";
function ReplyIconButton() {
  return (
    <>
      <div className={styles["container"]}>
        <Reply className={styles[""]} />
      </div>
    </>
  );
}
export default ReplyIconButton;
