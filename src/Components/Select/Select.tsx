import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateSelectedVoice, updateSelectedLang } from "../../Redux/Actions";

interface Props {
  voices: SpeechSynthesisVoice[];
}

const Select = ({ voices }: Props) => {
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [selectedLang, setSelectedLang] = useState<string>("");

  const dispatch = useDispatch();

  const changeVoice = (event: React.ChangeEvent<HTMLSelectElement>) => {
    voices.forEach((voice) => {
      if (`${voice.name} (${voice.lang})` === event.target.value) {
        console.log("yes");
        setSelectedVoice(voice.name);
        setSelectedLang(voice.lang);
      }
    });
  };

  const appandVoices = (): JSX.Element[] => {
    return voices.map((voice: SpeechSynthesisVoice): JSX.Element => {
      return (
        <option
          data-lagn={voice.lang}
          data-name={voice.name}
        >{`${voice.name} (${voice.lang})`}</option>
      );
    });
  };

  useEffect(() => {
    dispatch(updateSelectedVoice(selectedVoice));
  }, [selectedVoice]);

  useEffect(() => {
    dispatch(updateSelectedLang(selectedLang));
  }, [selectedLang]);

  return (
    <div className={`py-5`}>
      <select
        id="voice-select"
        className="form-control form-control-lg"
        onChange={changeVoice}
      >
        {appandVoices()}
      </select>
    </div>
  );
};

export default Select;
