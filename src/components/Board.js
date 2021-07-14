import React, { useState } from 'react';
import Row from './Row';

const Board = (props) => {
  // const [canCheck, setCanCheck] = useState(false);

  return (
    <div className='board'>
      {Array(10)
        .fill(null)
        .map((row, i) => (
          <Row
            key={i}
            id={i}
            activeColor={props.activeColor}
            activeRow={props.activeRow}
            checkWin={props.checkWin}
          />
        ))}
    </div>
  );
};

export default Board;
