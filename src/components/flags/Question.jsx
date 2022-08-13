import { useContext, useEffect } from 'react';
import Result from './Result';
import classes from './Question.module.css';
import FlagContext from '../../store/context';

const Question = () => {
  const flagCtx = useContext(FlagContext);
  const { generateNewQuestion, reset } = flagCtx;

  useEffect(() => {
    reset();
    generateNewQuestion();
  }, [generateNewQuestion, reset]);

  const nextQuestionHandler = () => {
    generateNewQuestion();
  };

  return (
    <>
      <h1>
        Your Score : {flagCtx.score}/{flagCtx.totalQuestion}
      </h1>

      {flagCtx.currentQuestion <= flagCtx.totalQuestion ? (
        <div className={classes.question}>
          <img src={flagCtx.question.ques} alt='Question Flag' />
          <ul>
            {flagCtx.question.options?.map((option) => (
              <li
                key={option}
                onClick={() => flagCtx.validateAnswer(option)}
                className={
                  flagCtx.question.ans === option ? classes.green : classes.red
                }
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Result restart={flagCtx.reset} score={flagCtx.score} />
      )}
      {/* Next Button */}
      {flagCtx.showNextButton && (
        <button className={classes.nextBtn} onClick={nextQuestionHandler}>
          {flagCtx.currentQuestion === flagCtx.totalQuestion
            ? 'Finish'
            : 'Next'}
        </button>
      )}
    </>
  );
};

export default Question;
