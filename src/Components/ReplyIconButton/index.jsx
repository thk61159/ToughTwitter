import React from "react";
import styles from "./ReplyIconButton.module.scss";
import { ReactComponent as Reply } from "../../assets/icons/reply_icon.svg";
// import ReplyModal from "../ReplyModal";
function ReplyIconButton({ setModal }) {
	return (
		<>
			<div
				className={styles['container']}
				onClick={() => {
					setModal(true)
				}}>
				<Reply className={styles['']} />
			</div>
		</>
	)
}
export default ReplyIconButton;
