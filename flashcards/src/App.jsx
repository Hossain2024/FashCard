import { useState } from 'react'
import './App.css'
import FlashCard from './FlashCard.jsx'

function App() {
  const flashcard_array = [
    { id: 1, question: "What is the largest continent by land area?", answer: "Asia" },
    { id: 2, question: "Which ocean is the deepest in the world?", answer: "Pacific Ocean" },
    { id: 3, question: "What is the capital of Australia?", answer: "Canberra" },
    {id: 4, question: "Who was the first president of the United States", answer:"George Washignton"},
    {id: 5, question: "what is the capital of bangladesh", answer: "Dhaka"},
    {id:6, question:"what is the largest planet of our solar system",answer:"Jupiter"}
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const[userInput, setuserInput] = useState('');
  const[answer, answerStatus] = useState('')
const checkAnswer =() => {
  if(isFlipped){
    return
  }
  if(userInput.toLowerCase()!= flashcard_array[currentIndex].answer.toLowerCase()){
    answerStatus('wrong')
  }
  else{
    answerStatus('correct')
  }
}
  const handleFlip = () => {
    setIsFlipped((prev) => !prev)

  }
  const handleNext = () => {
    setCurrentIndex((prev) => (prev < flashcard_array.length - 1 ? prev + 1 : prev))
    setIsFlipped(false)
    answerStatus('')
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
    setIsFlipped(false)
    answerStatus('')
  }

  return (
    <div className="background">
     
      <div>
      <h1>General Knowledge</h1>
      <h2> Test your knowledge with these flashcards! Click on the card to flip and learn the answer</h2>
      
      </div>
    <div className = "inputstyle"> 
      <input type ="text" value ={userInput} placeholder= "enter a value" onChange ={(e)=> setuserInput(e.target.value)} className = {answer} />

      <button type= "submit" className = "submitbutton" onClick={checkAnswer}>  Submit </button>
      <p>{answer}</p>
    </div>

      
      <FlashCard 
        card={flashcard_array[currentIndex]} 
        isFlipped={isFlipped} 
        onFlip={handleFlip} 
      />
    
      <div className="button-container">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentIndex === flashcard_array.length - 1}>
          Next
        </button>
      </div>
    </div>
  )
}

export default App
