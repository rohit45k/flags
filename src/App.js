import Question from './components/Question';
import classes from './App.module.css';

function App() {
  return (
    <section
      className={classes.app}
      style={{
        backgroundImage: `url("https://t4.ftcdn.net/jpg/04/84/11/15/360_F_484111532_W0WOkKeXQzF75XusA7R8e3llIDXqyCFm.jpg")`,
      }}
    >
      <Question />;
    </section>
  );
}

export default App;
