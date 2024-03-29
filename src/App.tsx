import { useState } from "react"
import words from './wordList.json'
import { KeyBoard } from "./KeyBoard";
import { HangManWord } from "./HangManWord";
import { HangManDrawing } from "./HangManDrawing";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const[guessedLetters, setGuessedLetters] = useState<string[]>([]);
console.log(wordToGuess);

  return (
      <div style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "o auto",
        alignItems: "center",
      }}>
        <div style={{
          fontSize: "2rem",
          textAlign: "center"
        }}>
          Lose
          Win
        </div>
        <HangManDrawing />
        <HangManWord />
        <KeyBoard />
     </div>
  )
}

export default App
