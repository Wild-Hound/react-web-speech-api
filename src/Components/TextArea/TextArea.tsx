import React, { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateSpeakText } from "../../Redux/Actions";

const TextArea = () => {
  const [speakText, setSpeakText] = useState("");
  const dispatch = useDispatch();

  // @ts-ignore
  const chgText = (event: React.ChangeEvent<FormControlElement>) => {
    setSpeakText(event.target.value);
    console.log(speakText);
  };

  useEffect(() => {
    dispatch(updateSpeakText(speakText));
  }, [speakText]);

  return (
    <div className={`py-5`}>
      <Form.Control
        as="textarea"
        placeholder="Type Here..."
        style={{ height: "150px" }}
        onChange={chgText}
      />
    </div>
  );
};

export default TextArea;
