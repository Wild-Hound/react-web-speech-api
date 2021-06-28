export const speakText = (state = "", action) => {
  switch (action.type) {
    case "updateSpeakText":
      return action.payload;
    default:
      return state;
  }
};

export const rate = (state = "1", action) => {
  switch (action.type) {
    case "updateRate":
      return action.payload;
    default:
      return state;
  }
};

export const pitch = (state = "1", action) => {
  switch (action.type) {
    case "updatePitch":
      return action.payload;
    default:
      return state;
  }
};

export const selectedVoice = (state = "", action) => {
  switch (action.type) {
    case "updateSelectedVoice":
      return action.payload;
    default:
      return state;
  }
};

export const selectedLang = (state = "", action) => {
  switch (action.type) {
    case "updateSelectedLang":
      return action.payload;
    default:
      return state;
  }
};

export const voices = (state = [], action) => {
  switch (action.type) {
    case "updateVoices":
      return action.payload;
    default:
      return state;
  }
};

export const isPaused = (state = false, action) => {
  switch (action.type) {
    case "updateIsPaued":
      return action.payload;
    default:
      return state;
  }
};

export const textFromSpeech = (state = "", action) => {
  switch (action.type) {
    case "updateTextFromSpeech":
      return action.payload;
    default:
      return state;
  }
};

export const Listening = (state = true, action) => {
  switch (action.type) {
    case "updateListening":
      return action.payload;
    default:
      return state;
  }
};
