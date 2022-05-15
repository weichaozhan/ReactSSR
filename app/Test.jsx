import React from 'react';

const Test = () => {
  const handleClick = () => {
    console.log(handleClick);
  };

  return (
    <div>
      <h1>It's Test</h1>
      <button onClick={handleClick}>
        test
      </button>
    </div>
  )
};

export default Test;
