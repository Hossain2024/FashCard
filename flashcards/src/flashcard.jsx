import React, { useState } from 'react';
import './flashcard.css'
function FlashCard({card, isFlipped, onFlip}) {

    return (
        <div className= {`flashcard ${isFlipped ? 'flipped' : ''}`}onClick={onFlip}>
        <div className= "flashcard-front">
            <p>{card.question}</p>
        </div>
        <div className="flashcard-back">
            <p>{card.answer}</p>
        </div>        
        </div>
     
    )
  }
  
  export default FlashCard