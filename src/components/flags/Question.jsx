import { useContext, useState } from 'react';

import classes from './Question.module.css';
import FlagContext from '../../store/context';

const Question = () => {
  const [showStart, setShowStart] = useState(true);
  const flagsCtx = useContext(FlagContext);
  const {
    generateNewQuestion,
    score,
    currentQuestion,
    question,
    totalQuestion,
    validateAnswer,
    showNextButton,
  } = flagsCtx;

  const nextQuestionHandler = () => {
    if (showStart) {
      setShowStart(false);
    }
    generateNewQuestion();
  };

  return (
    <main className={classes.main}>
      {showStart && (
        <>
          <h1>Total Questions : {totalQuestion}</h1>
          <h1>
            <button className={classes.nextBtn} onClick={nextQuestionHandler}>
              START THE QUIZ
            </button>
          </h1>
        </>
      )}
      {!showStart && (
        <>
          <h1>
            Your Score : {score}/{totalQuestion}--{currentQuestion}
          </h1>
          <div className={classes.question}>
            <img src={question.ques} alt='Question Flag' />
            <ul>
              {question.options?.map((option) => (
                <li
                  key={option}
                  onClick={() => validateAnswer(option)}
                  className={
                    question.ans === option ? classes.green : classes.red
                  }
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          {/* Next Button */}
          {showNextButton && (
            <button className={classes.nextBtn} onClick={nextQuestionHandler}>
              Next
            </button>
          )}
        </>
      )}
    </main>
  );
};

export default Question;
