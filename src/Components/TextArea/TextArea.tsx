import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const TextArea = () => {
  const [speakText, setSpeakText] = useState("");

  // @ts-ignore
  const chgText = (event: React.ChangeEvent<FormControlElement>) => {
    setSpeakText(event.target.value);
    console.log(speakText);
  };

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
