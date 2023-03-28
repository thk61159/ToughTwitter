import React from 'react'
import styles from './Alert.module.scss'


import { ReactComponent as Warn } from '../../assets/icons/notification_warning.svg'
import { ReactComponent as Error } from '../../assets/icons/notification_error.svg'
import { ReactComponent as Suc } from '../../assets/icons/notification_success.svg'
const arr = [
	<div className={styles['note-c-blue']}>
		<Warn/>
	</div>,
	<div className={styles['note-c-yellow']}>
		<Warn />
	</div>,
	<div className={styles['note-c-red']}>
		<Error />
	</div>,
	<div className={styles['note-c-green']}>
		<Suc />
	</div>,
]
const Alert = () => {
	return (
		//為了看樣式實際上不需要map
		<div>
			{arr.map((svg,i) => {
				return (
					<div className={styles['alert']} key={i}>
						<div className={styles['alert-c']}>
							<p className={styles['alert-p']}>{'要放訊息的地方'}</p>
							{svg}
						</div>
					</div>
				)})}
			
		</div>
		
	)
}

export default Alert