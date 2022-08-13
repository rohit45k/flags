import { useContext, useEffect, useState } from 'react';
import Result from './Result';
import classes from './Question.module.css';
import FlagContext from '../../store/context';

const Question = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const flagCtx = useContext(FlagContext);
  const { generateNewQuestion, reset } = flagCtx;

  useEffect(() => {
    reset();
  }, [generateNewQuestion, reset]);

  const nextQuestionHandler = () => {
    setSelectedOption('');
    generateNewQuestion();
  };

  const optionClickHandler = (option) => {
    setSelectedOption(option);
    flagCtx.validateAnswer(option);
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
                onClick={() => optionClickHandler(option)}
                className={`${
                  selectedOption &&
                  option === selectedOption &&
                  selectedOption !== flagCtx.question.ans
                    ? classes.red
                    : ''
                } ${
                  selectedOption && option === flagCtx.question.ans
                    ? classes.green
                    : ''
                } `}
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
