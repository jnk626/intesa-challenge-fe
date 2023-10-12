import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
//import { openai } from "../../service/openai";

/*
const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [],
  temperature: 0,
  max_tokens: 1024
})
*/

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
  const [chats, setChats] = useState([]);

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
          <p>{transcript}</p>
          <br />
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};
export default Dictaphone;
