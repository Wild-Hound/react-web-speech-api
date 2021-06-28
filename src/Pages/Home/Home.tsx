import React, { useState } from "react";
import styles from "./Home.module.scss";
import Rate_Pitch from "../../Components/Rate_Pitch/Rate_Pitch";
import TextArea from "../../Components/TextArea/TextArea";
import Select from "../../Components/Select/Select";
import SpeakBtn from "../../Components/Button/SpeakBtn";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateVoices } from "../../Redux/Actions";
import SpeechRecControls from "../../Components/SpeechRecControls/SpeechRecControls";

const Home: React.FC = () => {
  const synth = speechSynthesis;

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(updateVoices(voices));
  }, [voices]);

  return (
    <div className={`${styles.homeCon} bg-dark`}>
      <div className={`${styles.wrapper} container`}>
        <h1 className={`text-white text-center`}>Web Speech API On React</h1>
        <div>
          <TextArea />
          <Rate_Pitch />
          <Select voices={voices} />
          <SpeakBtn synth={synth} />
        </div>
        <div>
          <SpeechRecControls />
        </div>
      </div>
    </div>
  );
};

export default Home;
