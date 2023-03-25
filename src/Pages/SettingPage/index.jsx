import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./SettingPage.module.scss";
import { Myaxios } from "../../constants";
import MyContext from '../../Components/MyContext'
import { formChange } from '../../utils'

// Components
import Button from "../../Components/Button";
import AuthInput from "../../Components/AuthInput";
import UserSidebarContainer from "../../Components/UserSidebarContainer";


function SettingPage() {
  const { token, user } = useContext(MyContext)
  const navigate = useNavigate()
  //State
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const [checkPassword, setCheckPassword] = useState("");
	const [note, setNote] = useState({})
	//檢驗realtime input
	function updateNoteField(field, value) {
		if (field === 'password' && value) {
			const regExp = new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.{4,12})')
			return regExp.test(value)
				? setNote({ ...note, [field]: '' })
				: setNote({ ...note, [field]: '請包含至少一個小寫英文字及數字' })
		} else {
			return !value.trim() && field !== 'password'
				? setNote({ ...note, [field]: `${field}不可以空白` })
				: setNote({ ...note, [field]: '' })
		}
	}
	//處理資料並送出
  const saveHandler = (e) => {
    try {
    if (!(account && name && email )) throw new Error()
    if (password !== checkPassword) {
			setPassword('')
			setCheckPassword('')
			setNote({ ...note, password :'密碼與確認密碼不符！'})
		}
      const form = { account, name, email, password }

      if (formChange(form, user)) {
				Myaxios(token)
					.put(`users/${user.id}`, form)
					.then(e => {
						if (!e) throw new Error('系統錯誤請稍後再試')
						alert('編輯成功')
					})
			}
			navigate('/home')
    } catch (err) {
      alert(err.message)
    }
	}
	//使用者資料
  useEffect(() => {
		if (user) {
			setAccount(user.account)
			setName(user.name)
			setEmail(user.email)
		}
	}, [user])
	useEffect(() => { updateNoteField('account', account)}, [account])
	useEffect(() => { updateNoteField('name', name) }, [name])
	useEffect(() => { updateNoteField('email', email) }, [email])
	useEffect(() => {updateNoteField('password', password) }, [password])
  return (
		<div className={styles['container']}>
			<div className={styles['column-1']}>
				<UserSidebarContainer />
			</div>
			<div className={styles['column-2']}>
				<div className={styles['column-2-container']}>
					<h4 className={styles['title']}>帳號設定</h4>
					{/* Auth Form */}
					<div className={styles['auth-form']}>
						<div className={styles['authinput-group']}>
							<AuthInput
								label="帳號"
								type="text"
								value={account}
								placeholder="請輸入帳號"
								onChange={setAccount}
								note={note.account}
							/>

							<AuthInput
								label="名稱"
								type="text"
								value={name}
								placeholder="請輸入使用者名稱"
								onChange={setName}
								note={note.name}
							/>

							<AuthInput
								label="Email"
								type="text"
								value={email}
								placeholder="請輸入Email"
								onChange={setEmail}
								note={note.email}
							/>

							<AuthInput
								label="密碼（需介於4到～12字元）"
								type="password"
								value={password}
								placeholder="請設定密碼"
								onChange={setPassword}
								note={note.password}
							/>

							<AuthInput
								label="密碼再確認"
								type="password"
								value={checkPassword}
								placeholder="請再次輸入密碼"
								onChange={setCheckPassword}
							/>
						</div>
						{/* Save Button */}
						<div className={styles['save-button']} onClick={saveHandler}>
							<Button styleName="bg-logo">儲存</Button>
						</div>
					</div>
				</div>
			</div>
			<div className={styles['column-3']}></div>
		</div>
	)
}

export default SettingPage;
