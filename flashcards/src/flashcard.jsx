import React, { useState } from 'react';
import './flashcard.css';

const Flashcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard-content">
        {flipped ? <p>{answer}</p> : <p>{question}</p>}
      </div>
    </div>
  );
};

export default Flashcard;
