import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { reduxState } from "../../index";

interface Props {
  synth?: SpeechSynthesis;
}

const SpeakBtn: React.FC<Props> = ({ synth }) => {
  const speakText = useSelector((state: reduxState) => state.speakText);
  const selectedVoice = useSelector((state: reduxState) => state.selectedVoice);
  const selectedLagn = useSelector((state: reduxState) => state.selectedLang);
  const rate = useSelector((state: reduxState) => state.rate);
  const pitch = useSelector((state: reduxState) => state.pitch);
  const voices = useSelector((state: reduxState) => state.voices);

  const speakAct = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let Textsynth = new SpeechSynthesisUtterance(speakText);
    Textsynth.rate = parseFloat(rate);
    Textsynth.pitch = parseFloat(pitch);
    Textsynth.lang = selectedLagn;
    voices.forEach((voice) => {
      if (
        // @ts-ignore
        voices.name === selectedVoice
      ) {
        Textsynth.voice = voice;
      }
    });
    synth?.speak(Textsynth);
  };

  return (
    <div>
      <Button className="btn-lg btn-block mb-3" onClick={speakAct}>
        Speak
      </Button>
    </div>
  );
};

export default SpeakBtn;
