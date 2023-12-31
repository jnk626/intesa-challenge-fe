import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  const commands = [
    {
      command: "hello",
      callback: () => setMessage("Hello there!"),
    }
  ]
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState("");

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({ continuous: true, language: "en-EN"});
  };

  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    stopListening();
    resetTranscript();
  };

  return (
    <div>
      <p>Microphone: {isListening ? "on" : "off"}</p>
      <button onClick={handleListening}>Start</button>
      {isListening && <button onClick={stopListening}>Stop</button>}
      {transcript && (
        <div>
          <p>{message}</p>
          <br />
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};
export default Dictaphone;
