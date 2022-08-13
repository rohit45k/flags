import { countries } from 'country-flags-svg';
import { useCallback } from 'react';
import { useReducer } from 'react';
import FlagContext from './context';

const initialState = {
  question: {},
  score: 0,
  totalQuestion: 10,
  currentQuestion: 0,
  showNextButton: false,
};

const flagReducer = (state, action) => {
  switch (action.type) {
    case 'GEN_NEXT_QUES':
      const index = Math.floor(Math.random() * 246 + 1);
      const ques = countries[index].flag;
      const ans = countries[index].name;
      let options = [];
      options.push(ans);

      for (let i = 0; i < 3; i++) {
        const rand = Math.floor(Math.random() * 246 + 1);
        if (!options.includes(countries[rand].name)) {
          options.push(countries[rand].name);
        } else {
          i--;
        }
      }
      options = options.sort(() => 0.5 - Math.random());

      const question = {
        ques,
        ans,
        options,
      };

      return {
        ...state,
        question,
        currentQuestion: state.currentQuestion + 1,
        showNextButton: false,
      };

    case 'VALIDATE_ANS':
      if (state.question.ans === action.payload) {
        // console.log('Correct Answer');
        return {
          ...state,
          showNextButton: true,
          score: state.score + 1,
        };
      } else {
        // console.log('Wrong Answer');
        return { ...state, showNextButton: true };
      }

    case 'SET_NUM_QUES':
      return { ...state, totalQuestion: action.payload };

    case 'RESET':
      return { ...initialState, totalQuestion: state.totalQuestion };

    default:
      return state;
  }
};

const FlagProvider = (props) => {
  const [store, dispatch] = useReducer(flagReducer, initialState);

  const generateNewQuestion = useCallback(() => {
    dispatch({ type: 'GEN_NEXT_QUES' });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
    generateNewQuestion();
  }, [generateNewQuestion]);

  const validateAnswer = (guess) => {
    if (!store.showNextButton) {
      dispatch({ type: 'VALIDATE_ANS', payload: guess });
    }
  };

  const setQuestions = (num) => {
    dispatch({ type: 'SET_NUM_QUES', payload: num });
  };

  const flagStore = {
    question: store.question,
    score: store.score,
    totalQuestion: store.totalQuestion,
    currentQuestion: store.currentQuestion,
    showNextButton: store.showNextButton,
    setQuestions,
    generateNewQuestion,
    validateAnswer,
    reset,
  };

  return (
    <FlagContext.Provider value={flagStore}>
      {props.children}
    </FlagContext.Provider>
  );
};

export default FlagProvider;
