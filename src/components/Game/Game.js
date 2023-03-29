import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Running, won, lost
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses);

   if(guess.toUpperCase() === answer) {
     setGameStatus('won');
   } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
     setGameStatus('lost');
   }
  }

  
 return <>
  {gameStatus}
  <GuessResults guesses={guesses} answer={answer} />
  <GuessInput
    gameStatus={gameStatus}
    handleSubmitGuess={handleSubmitGuess}
  />
  <GameOverBanner gameStatus={gameStatus} numOfGuesses={guesses.length} answer={answer} />
</>;
}

export default Game;
