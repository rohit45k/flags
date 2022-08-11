import classes from './QuestionPage.module.css';
import Question from '../components/flags/Question';

const QuestionPage = () => {
  return (
    <section className={classes['question-wrapper']}>
      <Question />
    </section>
  );
};

export default QuestionPage;
