import React, { useContext } from 'react'


import styles from './LikeFullIconButton.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'

import { ReactComponent as LikeFull } from '../../assets/icons/like_full_icon.svg'

function LikeFullIconButton({ id }) {
	const {token} = useContext(MyContext)
	const btnHandler = (e) => {
		Myaxios(token)
			.post(`/tweets/${id}/like`)
			.then(e => console.log(e))
			.catch(err => console.log(err))
	}

	return (
		<div className={styles['container']}>
			<LikeFull className={styles[2]} onClick={btnHandler}/>
		</div>
	)
}
export default LikeFullIconButton
