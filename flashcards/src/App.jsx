import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the capital of Australia?", answer: "Canberra" },
    { question: "What is the capital of Canada?", answer: "Ottawa" },
  ];

  const handleFlip = () =>{
    setIsFlipped(!isFlipped);
  }

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  }
  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
  };
  return (
      <div className= "background">
      <div className= "flashcard" onClick ={handleFlip}>
      {isFlipped ? flashcards[currentIndex].answer : flashcards[currentIndex].question}
        
      </div>
      <div className= "buttons">
        <button onClick={prevCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
      </div>
   
  )
}

export default App
