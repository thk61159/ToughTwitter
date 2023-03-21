import React, { useState } from "react";
import styles from "./AdminLoginPage.module.scss";
import { Link } from "react-router-dom";

// Component
import { ReactComponent as AcLogo } from "../../assets/icons/AcLogo.svg";
import AuthInput from "../../Components/AuthInput/index";
import Button from "../../Components/Button";

function AdminLoginPage() {
  //狀態設置
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  //事件處理
  const handleClick = () => {};
  return (
    <div className={styles.container}>
      <div>
        <AcLogo />
      </div>
      <h3 className={styles.title}>後台登入</h3>
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
      {/* 登入按鈕 */}
      <div className={styles["auth-button"]} onClick={handleClick}>
        <Button styleName="lg-bg-logo">登入</Button>
      </div>
      {/* 超連結 */}
      <div className={styles["auth-link-box"]}>
        <Link to="/login" className={styles["auth-link"]}>
          <div className={styles["auth-link-text"]}>前台登入</div>
        </Link>
      </div>
    </div>
  );
}

export default AdminLoginPage;
