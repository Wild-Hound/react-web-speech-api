import React from "react";
import styles from "./SpeechRecControls.module.scss";

const SpeechRecControls = () => {
  return (
    <div className={styles.controlWrapper}>
      <button className={styles.pause}>Pause</button>
      <button className={styles.resume}>Resume</button>
      <button className={styles.cancel}>Cancel</button>
    </div>
  );
};

export default SpeechRecControls;
