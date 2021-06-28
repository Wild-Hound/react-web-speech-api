import React from "react";
import styles from "./RecResArea.module.scss";
import { useSelector } from "react-redux";
import { reduxState } from "../../index";

function RecResArea() {
  const extractedText = useSelector(
    (state: reduxState) => state.textFromSpeech
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Speech recognition results are shown here..."
        readOnly
        className={styles.resArea}
        value={extractedText}
      />
    </div>
  );
}

export default RecResArea;
