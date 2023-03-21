import React from "react";
import styles from "./AuthInput.module.scss";
function AuthInput({ label, type, value, placeholder, onChange }) {
  return (
    <div className={["authinput-container"]}>
      <div className={styles["authinput-box"]}>
        <label className={styles["authinput-label"]}>{label}</label>
        <input
          className={styles["authinput"]}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </div>
  );
}

export default AuthInput;
