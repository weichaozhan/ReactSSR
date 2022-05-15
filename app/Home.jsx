import React from 'react';

const Home = () => {
  const handleClick = () => {
    console.log(handleClick);
  };

  return (
    <div>
      <div>It's Home</div>
      <button onClick={handleClick}>
        test
      </button>
    </div>
  )
};

export default Home;
