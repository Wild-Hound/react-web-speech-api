export const updateSpeakText = (data) => {
  return {
    type: "updateSpeakText",
    payload: data,
  };
};

export const updateRate = (data) => {
  return {
    type: "updateRate",
    payload: data,
  };
};

export const updatePitch = (data) => {
  return {
    type: "updatePitch",
    payload: data,
  };
};
export const updateSelectedVoice = (data) => {
  return {
    type: "updateSelectedVoice",
    payload: data,
  };
};
export const updateSelectedLang = (data) => {
  return {
    type: "updateSelectedLang",
    payload: data,
  };
};
export const updateVoices = (data) => {
  return {
    type: "updateVoices",
    payload: data,
  };
};
