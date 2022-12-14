import { useState, useContext } from 'react';
import Card from '../components/UI/card/Card';
import FlagContext from '../store/context';

import classes from './QuestionPage.module.css';
import Question from '../components/flags/Question';

const QuestionPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const flagCtx = useContext(FlagContext);

  return (
    <section className={classes['question-wrapper']}>
      <Card className={classes.main}>
        {!isStarted ? (
          <>
            <h1>
              Total Questions :{' '}
              <span className={classes.select}>
                <select
                  value={flagCtx.totalQuestion}
                  onChange={(e) =>
                    flagCtx.setQuestions(parseInt(e.target.value))
                  }
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </span>
            </h1>
            <h1>
              <button
                className={classes.nextBtn}
                onClick={() => setIsStarted(true)}
              >
                START THE QUIZ
              </button>
            </h1>
          </>
        ) : (
          <Question />
        )}
      </Card>
    </section>
  );
};

export default QuestionPage;
