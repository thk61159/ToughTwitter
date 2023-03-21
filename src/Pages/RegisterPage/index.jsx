import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.scss";

//Components
import { ReactComponent as AcLogo } from "../../assets/icons/AcLogo.svg";
import AuthInput from "../../Components/AuthInput";
import Button from "../../Components/Button";

function RegisterPage() {
  //狀態設定
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  //事件處理
  const handleClick = () => {};
  return (
    <div className={styles.container}>
      <div>
        <AcLogo />
      </div>
      <h3 className={styles.title}>建立你的帳號</h3>
      {/* AuthInput group */}
      <div className={styles["authinput-group"]}>
        <AuthInput
          label="帳號"
          type="text"
          value={account}
          placeholder="請輸入帳號"
          onChange={setAccount}
        />

        <AuthInput
          label="名稱"
          type="text"
          value={name}
          placeholder="請輸入使用者名稱"
          onChange={setName}
        />

        <AuthInput
          label="Email"
          type="text"
          value={email}
          placeholder="請輸入Email"
          onChange={setEmail}
        />

        <AuthInput
          label="密碼"
          type="password"
          value={password}
          placeholder="請設定密碼"
          onChange={setPassword}
        />

        <AuthInput
          label="密碼確認"
          type="password"
          value={checkPassword}
          placeholder="請再次輸入密碼"
          onChange={setCheckPassword}
        />
      </div>
      <div className={styles["auth-button"]} onClick={handleClick}>
        <Button styleName="lg-bg-logo">註冊</Button>
      </div>
      {/* Auth Link */}
      <Link to="/login" className={styles["auth-link"]}>
        <div className={styles["auth-link-text"]}>取消</div>
      </Link>
    </div>
  );
}

export default RegisterPage;
