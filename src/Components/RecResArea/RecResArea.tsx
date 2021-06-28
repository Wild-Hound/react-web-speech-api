import React from "react";
import styles from "./RecResArea.module.scss";

function RecResArea() {
  return (
    <div>
      <input
        type="text"
        placeholder="Speech recognition results are shown here..."
        readOnly
        className={styles.resArea}
      />
    </div>
  );
}

export default RecResArea;
