import styles from './ReplySubmitButton.module.scss'
import Button from "../../Button";
function ReplySubmitButton() {
	return (
		<div className={styles['container']}>
			<Button styleName={'bg-logo'}>回覆</Button>
		</div>
	)
}

export default ReplySubmitButton;
