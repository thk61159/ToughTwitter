import React from 'react'
import styles from './Alert.module.scss'

import { ReactComponent as Warn } from '../../assets/icons/notification_warning.svg'
import { ReactComponent as Error } from '../../assets/icons/notification_error.svg'
import { ReactComponent as Suc } from '../../assets/icons/notification_success.svg'
const arr = {
	notify: (
		<div className={styles['note-c-blue']}>
			<Warn className={styles['svgsvg']} />
		</div>
	),
	warn: (
		<div className={styles['note-c-yellow']}>
			<Warn className={styles['svgsvg']} />
		</div>
	),
	error: (
		<div className={styles['note-c-red']}>
			<Error className={styles['svgsvg']} />
		</div>
	),
	suc: (
		<div className={styles['note-c-green']}>
			<Suc className={styles['svgsvg']} />
		</div>
	),
}

const Alert = ({ alertNote, alertType }) => {
  
	return (
		//為了看樣式實際上不需要map
		
			<div className={styles['alert']}>
				<div className={styles['alert-c']}>
					<p className={styles['alert-p']}>{alertNote}</p>
					{arr[alertType]}
				</div>
			</div>
		
 	)
 }

export default Alert
