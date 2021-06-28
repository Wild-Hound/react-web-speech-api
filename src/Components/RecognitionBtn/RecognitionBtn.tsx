import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateTextFromSpeech, updateListening } from "../../Redux/Actions";
import { reduxState } from "../../index";

const RecognitionBtn = () => {
  const [textFromSpeech, setTextFromSpeech] = useState("");

  const dispatch = useDispatch();
  let listening = useSelector((state: reduxState) => state.Listening);

  // @ts-ignore
  const recognition: SpeechRecognition = new webkitSpeechRecognition();
  recognition.interimResults = false;
  //
  recognition.addEventListener("result", (e: SpeechRecognitionEvent) => {
    let speechText: string = Array.from(e.results)
      .map((x) => x[0].transcript)
      .join("");
    console.log(speechText);
    setTextFromSpeech(speechText);
  });
  // starting after every session end
  recognition.addEventListener("end", (e) => {
    console.log(listening);
    listening && recognition.start();
  });

  useEffect(() => {
    dispatch(updateTextFromSpeech(textFromSpeech));
  }, [textFromSpeech]);

  return (
    <div className={`d-flex`}>
      <Button
        className="btn-lg btn-block mt-3 mx-2"
        onClick={(e) => {
          dispatch(updateListening(true));
          recognition.start();
        }}
      >
        Start Listening
      </Button>
      <Button
        className="btn-lg btn-block mt-3 mx-2"
        onClick={(e) => {
          dispatch(updateListening(false));
          recognition.stop();
        }}
      >
        Stop Listening
      </Button>
    </div>
  );
};

export default RecognitionBtn;
