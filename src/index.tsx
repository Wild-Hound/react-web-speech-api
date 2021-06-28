import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers } from "redux";
import {
  speakText,
  rate,
  pitch,
  selectedVoice,
  selectedLang,
  voices,
  isPaused,
  textFromSpeech,
  Listening,
} from "./Redux/Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

export interface reduxState {
  speakText: "";
  rate: "";
  pitch: "";
  selectedVoice: "";
  selectedLang: "";
  voices: SpeechSynthesisVoice[];
  isPaused: boolean;
  textFromSpeech: "";
  Listening: boolean;
}

const store = createStore(
  combineReducers({
    speakText,
    rate,
    pitch,
    selectedVoice,
    selectedLang,
    voices,
    isPaused,
    textFromSpeech,
    Listening,
  }),
  composeWithDevTools()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
