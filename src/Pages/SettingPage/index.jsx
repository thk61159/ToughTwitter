import React, { useState } from "react";
import styles from "./SettingPage.module.scss";

// Components
import Button from "../../Components/Button";
import AuthInput from "../../Components/AuthInput";
import UserSidebarContainer from "../../Components/UserSidebarContainer";

function SettingPage() {
  //State
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  return (
    <div className={styles["container"]}>
      <div className={styles["column-1"]}>
        <UserSidebarContainer />
      </div>
      <div className={styles["column-2"]}>
        <div className={styles["column-2-container"]}>
          <h4 className={styles["title"]}>帳號設定</h4>
          {/* Auth Form */}
          <div className={styles["auth-form"]}>
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
                label="密碼（需介於4到～12字元）"
                type="password"
                value={password}
                placeholder="請設定密碼"
                onChange={setPassword}
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
            <div className={styles["save-button"]}>
              <Button styleName="bg-logo">儲存</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["column-3"]}></div>
    </div>
  );
}

export default SettingPage;
