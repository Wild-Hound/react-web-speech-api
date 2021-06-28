import React, { useEffect, useState } from "react";
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

  const [funcInterval, setFunInterval] = useState<number>();
  const [voiceState, setVoiceState] = useState(false);

  const speakAct = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (synth?.speaking) {
      return;
    }

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
    // triggers setInterval on useEffect using funcInterval
    setVoiceState(true);
  };

  synth?.addEventListener("onend", () => {
    // triggers setInterval on useEffect using funcInterval
    setVoiceState(false);
  });

  useEffect(() => {
    // window needs to be declared else Timeout type is returned required number type
    const voicePatch = window.setInterval(() => {
      if (voiceState) {
        synth?.pause();
        synth?.resume();
      } else {
        clearInterval(funcInterval);
      }
    }, 5000);

    voiceState && setFunInterval(voicePatch);
  }, [voiceState]);

  return (
    <div>
      <Button className="btn-lg btn-block mb-3" onClick={speakAct}>
        Speak
      </Button>
    </div>
  );
};

export default SpeakBtn;
