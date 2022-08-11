import { countries } from 'country-flags-svg';
import classes from './Question.module.css';

import { useEffect, useState } from 'react';

// GLOBAL VARIABLE
let INDEX = Math.floor(Math.random() * 246 + 1);

// HELPER FUNCTIONS
const generateNewQuestion = () => {
  const ques = countries[INDEX].flag;
  const ans = countries[INDEX].name;
  let options = [];

  for (let i = 0; i < 3; i++) {
    const rand = Math.floor(Math.random() * 246 + 1);
    options.push(countries[rand].name);
  }
  options.push(ans);
  options = options.sort(() => 0.5 - Math.random());

  INDEX += 1;
  return {
    ques,
    ans,
    options,
  };
};

const Question = () => {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState({});
  const [showNext, setShowNext] = useState(false);
  const [correctOption, setCorrectOption] = useState(false);

  useEffect(() => {
    setQuestion(generateNewQuestion());
    setShowNext(false);
  }, [questionNumber]);

  const nextQuestionHandler = () => {
    setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
    setCorrectOption(false);
  };

  const validateAnswer = (guess) => {
    if (showNext) {
      return;
    }
    setCorrectOption(true);
    if (guess === question.ans) {
      setScore((prevScore) => prevScore + 1);
    } else {
    }
    setShowNext(true);
  };

  return (
    <main className={classes.main}>
      {/* Score */}
      <h1>Your Score : {score}</h1>
      {/* Question and Options */}
      <div className={classes.question}>
        <img src={question?.ques} alt='Question Flag' />
        <ul>
          {question?.options?.map((option) => (
            <li
              key={option}
              onClick={() => validateAnswer(option)}
              className={
                question.ans === option && correctOption && classes.green
              }
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      {/* Next Button */}
      {showNext && (
        <button className={classes.nextBtn} onClick={nextQuestionHandler}>
          Next
        </button>
      )}
    </main>
  );
};

export default Question;
