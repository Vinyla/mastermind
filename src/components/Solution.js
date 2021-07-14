import React from 'react';

const Solution = (props) => {
  return (
    <div className={'solution'}>
      <p>You lose! || You win!</p>
      <div>
        <button className={'new-game'} onClick={props.newGame}>
          New Game
        </button>
      </div>
      {props.colorPattern.map((color, i) => (
        <div
          className={'circle-peg'}
          key={i}
          style={{ background: color }}
        ></div>
      ))}
    </div>
  );
};

export default Solution;
