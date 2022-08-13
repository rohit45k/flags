import React from 'react';

const Result = (props) => {
  const styles = {
    width: '100%',
    padding: '0.3rem',
    backgroundColor: '#f9ad43',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div>
      <h1>Quiz Ended</h1>
      <button onClick={props.restart} style={styles}>
        Restart
      </button>
    </div>
  );
};

export default Result;
