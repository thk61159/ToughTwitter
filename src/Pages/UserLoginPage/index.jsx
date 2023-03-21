import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AcLogo } from "../../assets/icons/AcLogo.svg";
import styles from "./UserLoginPage.module.scss";

// Components
import Button from "../../Components/Button";
import AuthInput from "../../Components/AuthInput";

function UserLoginPage() {
  //useState狀態
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  // 事件處理
  const handleClick = () => {};
  return (
    <div className={styles.container}>
      <div>
        <AcLogo />
      </div>
      <h3 className={styles.title}>登入Alphitter</h3>
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
          label="密碼"
          type="password"
          value={password}
          placeholder="請輸入密碼"
          onChange={setPassword}
        />
      </div>
      <div className={styles["auth-button"]} onClick={handleClick}>
        <Button styleName="lg-bg-logo">登入</Button>
      </div>
      {/* 超連結 */}
      <div className={styles["auth-link-box"]}>
        <Link to="/register" className={styles["auth-link"]}>
          <div className={styles["auth-link-text"]}>註冊</div>
        </Link>
        <div className={styles["auth-link-dot"]}>·</div>
        <Link to="/admin" className={styles["auth-link"]}>
          <div className={styles["auth-link-text"]}>後台登入</div>
        </Link>
      </div>
    </div>
  );
}

export default UserLoginPage;
