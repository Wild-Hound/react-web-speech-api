import React, { useState } from "react";
import styles from "./Home.module.scss";
import Rate_Pitch from "../../Components/Rate_Pitch/Rate_Pitch";
import TextArea from "../../Components/TextArea/TextArea";
import Select from "../../Components/Select/Select";
import SpeakBtn from "../../Components/Button/SpeakBtn";
import { useEffect } from "react";

const Home: React.FC = () => {
  const synth = speechSynthesis;

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  //
  useEffect(() => {
    getVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = getVoices;
    }
  }, []);
  //
  const getVoices = () => {
    setVoices(synth.getVoices());
  };

  return (
    <div className={`${styles.homeCon} bg-dark`}>
      <div className={`${styles.wrapper} container`}>
        <TextArea />
        <Rate_Pitch />
        <Select voices={voices} />
        <SpeakBtn />
      </div>
    </div>
  );
};

export default Home;
