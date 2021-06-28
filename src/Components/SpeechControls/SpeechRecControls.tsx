import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SpeechControls.module.scss";
import { reduxState } from "../../index";
import { updateIntervalPointer } from "../../Redux/Actions";

interface Props {
  synth: SpeechSynthesis;
}

const SpeechControls: React.FC<Props> = ({ synth }) => {
  const dispatch = useDispatch();
  const intervalPointer = useSelector(
    (state: reduxState) => state.intervalPointer
  );

  const pauseAct = () => {
    if (synth.speaking) {
      clearInterval(intervalPointer);
      synth.pause();
    }
  };

  const resumeAct = () => {
    synth.resume();

    const voicePatch = window.setInterval(() => {
      synth?.pause();
      synth?.resume();
    }, 5000);

    dispatch(updateIntervalPointer(voicePatch));
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
