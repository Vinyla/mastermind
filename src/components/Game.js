import React, { useState } from 'react';
import Rules from './Rules';
import Board from './Board';
import Solution from './Solution';

const Game = () => {
  const [colors] = useState([
    'crimson',
    'limegreen',
    'darkcyan',
    'yellow',
    'rebeccapurple',
    'orange'
  ]);
  // set random color pattern
  const colorPattern = [];
  for (let i = 0; i < 4; i++) {
    colorPattern.push(colors[Math.floor(Math.random() * 6)]);
  }

  const [activeColor, setActiveColor] = useState('crimson');
  const [activeRow, setActiveRow] = useState(0);
  const [solutionVisible, setSolutionVisile] = useState(false);
  // const [defaultPegColor, setDefaultPegColor] = useState('gainsboro');
  // const [canCheck, setCanCheck] = useState(false);

  // color picker active color
  const colorIsActive = (color) => {
    // e.preventDefault();
    setActiveColor(color);
  };

  // set peg color from color picker
  const setPegColor = () => {};

  // function for check if there is win, and set next active row
  const checkWin = () => {
    setActiveRow(activeRow + 1);
  };

  //start new game
  const newGame = () => {
    window.location.reload();
    setSolutionVisile(false);
  };

  return (
    <div className='game'>
      <div>
        <h2>Mastermind</h2>
      </div>
      <Rules />
      <div>
        {colors.map((color, i) => (
          <div
            onClick={(e) => colorIsActive(color)}
            className={'color-picker'}
            key={i}
            style={{
              background: color,
              boxShadow: color === activeColor ? '0 0 5px #000' : ''
            }}
          ></div>
        ))}
      </div>
      <Board
        activeColor={activeColor}
        activeRow={activeRow}
        checkWin={checkWin}
      />
      <Solution colorPattern={colorPattern} newGame={newGame} />
    </div>
  );
};

export default Game;
