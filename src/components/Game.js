import React, { useState } from 'react';
import Rules from './Rules';
import Board from './Board';

const Game = () => {
  const [colors] = useState([
    'crimson',
    'limegreen',
    'darkcyan',
    'yellow',
    'rebeccapurple',
    'orange'
  ]);
  const [activeColor, setActiveColor] = useState('crimson');
  const [totalRows] = useState(10);
  const [activeRow, setActiveRow] = useState(0);

  // set random color pattern
  const colorPattern = [];
  for (let i = 0; i < 4; i++) {
    colorPattern.push(colors[Math.floor(Math.random() * 4) + 1]);
  }
  console.log(colorPattern);

  const checkColorPatern = () => {
    setActiveRow(activeRow + 1);
  };

  return (
    <div className='game'>
      <div>
        <h2>Mastermind</h2>
      </div>
      <Rules />
      <div>
        {colors &&
          colors.map((color, i) => (
            <div
              onClick={() => setActiveColor(color)}
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
        totalRows={totalRows}
        activeRow={activeRow}
        checkColorPatern={checkColorPatern}
      />
    </div>
  );
};

export default Game;
