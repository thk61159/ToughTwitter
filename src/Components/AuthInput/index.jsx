import React from 'react'
import styles from './AuthInput.module.scss'
function AuthInput({ label, type, value, placeholder, onChange, note, boxH, count, set }) {
	return (
		<div className={['authinput-container']}>
			<div className={styles['authinput-box']} style={{ height: boxH }}>
				<label className={styles['authinput-label']}>{label}</label>
				<input className={styles['authinput']} type={type} value={value} placeholder={placeholder} onChange={e => onChange?.(e.target.value)} />
			</div>

			{!count ? (
				<div className={styles['authinput-msg-box']}>
					<div className={styles['authinput-alertmsg']}>{note}</div>
				</div>
			) : (
				<div className={styles['counter-msg-box']}>
					<div style={{ color: note ? '#FC5A5A' : '#696974' }}>
						{note}
						{count}/{set}
					</div>
				</div>
			)}
		</div>
	)
}

export default AuthInput
