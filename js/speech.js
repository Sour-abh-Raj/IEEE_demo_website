// Text to Speech

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  let voices = synth.getVoices();
  voice.text = string;
  voice.lang = "en-GB";
  voice.volume = 1;
  voice.rate = 1;
  voice.pitch = 1.4;
  voice.voice = voices[22];
  synth.speak(voice);
};
