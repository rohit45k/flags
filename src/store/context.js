import { createContext } from 'react';

const FlagContext = createContext({
  question: {},
  score: 0,
  totalQuestion: 10,
  currentQuestion: 0,
  showNextButton: false,
  generateNewQuestion: () => {},
  validateAnswer: (guess) => {},
  reset: () => {},
});

export default FlagContext;
