import React from "react";
import styles from "./styles.module.css";

function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        <div className={styles.loginTitle}>
          <h2> Welcome to</h2>
          <p>Quality Compliance Portal</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
