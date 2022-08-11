import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuestionPage from './pages/QuestionPage';
import classes from './App.module.css';

function App() {
  return (
    <section
      className={classes.app}
      style={{
        backgroundImage: `url("https://t4.ftcdn.net/jpg/04/84/11/15/360_F_484111532_W0WOkKeXQzF75XusA7R8e3llIDXqyCFm.jpg")`,
      }}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/flags' element={<QuestionPage />} />
      </Routes>
    </section>
  );
}

export default App;
