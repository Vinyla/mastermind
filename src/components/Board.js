import React, { useState } from 'react';
import Row from './Row';

const Board = (props) => {
  const [activeRow, setActiveRow] = useState(0);
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
            activeRow={activeRow}
            setActiveRow={setActiveRow}
          />
        ))}
    </div>
  );
};

export default Board;
