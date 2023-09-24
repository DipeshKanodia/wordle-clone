import React from 'react'

export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Won!</h1>
          <p className="solution">You Got it: {solution}</p>
          <p>You found the solution in {turn} guesses ✌️</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Oops!!</h1>
          <p className="solution">Correct Word: {solution}</p>
          <p>Better luck next time👍</p>
        </div>
      )}
    </div>
  )
}