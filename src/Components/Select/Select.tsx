import React, { useState } from "react";
interface Props {
  voices: SpeechSynthesisVoice[];
}

const Select = ({ voices }: Props) => {
  const [selectedVoice, setSelectedVoice] = useState<string>();

  const changeVoice = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVoice(event.target.value);
    console.log(selectedVoice);
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
