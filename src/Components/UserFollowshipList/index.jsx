import React, { useState, useContext, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'

import styles from './UserFollowshipList.module.scss'
import { Myaxios } from '../../constants'
import MyContext from '../MyContext'
import {findPath} from '../../utils'

import UserFollowshipBox from '../UserFollowshipBox'


function UserFollowshipList({ token, BrowsingUser }) {
	const { account } = useParams()
	const path = useLocation().pathname
	let [Data, setData] = useState(null)
	let [loc, setLoc] = useState(null)
	useEffect(() => {

		if (loc !== findPath(path, 1) && BrowsingUser) {
			Myaxios(token)
				.get(`/users/${account}/${findPath(path, 1)}`)
				.then(e => {
					console.log(`使用者${findPath(path, 1)}清單`, e.status)
					setData(e.data)
					setLoc(findPath(path, 1))
				})
				.catch(err => console.log(err))
		}
	}, [Data, path])

	return (
		<div className={styles['container']}>
			{Data &&
				Data.map((d, i) => {
					return <UserFollowshipBox data={d} key={i} />
				})}
		</div>
	)
}

export default UserFollowshipList
