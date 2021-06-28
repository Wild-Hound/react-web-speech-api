import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SpeechControls.module.scss";
import { reduxState } from "../../index";
import { updateIsPaued } from "../../Redux/Actions";

interface Props {
  synth: SpeechSynthesis;
}

const SpeechControls: React.FC<Props> = ({ synth }) => {
  const dispatch = useDispatch();
  const isPaused = useSelector((state: reduxState) => state.isPaused);

  const pauseAct = () => {
    if (synth.speaking) {
      synth.pause();
      dispatch(updateIsPaued(true));
    }
  };

  const resumeAct = () => {
    synth.resume();
  };

  const cancelAct = () => {
    synth.cancel();
  };

  return (
    <div className={styles.controlWrapper}>
      <button className={styles.pause} onClick={pauseAct}>
        Pause
      </button>
      <button className={styles.resume} onClick={resumeAct}>
        Resume
      </button>
      <button className={styles.cancel} onClick={cancelAct}>
        Cancel
      </button>
    </div>
  );
};

export default SpeechControls;
