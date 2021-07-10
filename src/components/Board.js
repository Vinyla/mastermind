import React, { useState } from 'react';
import Row from './Row';

const Board = (props) => {
  const [activeRow, setActiveRow] = useState(0);

  const canCheck = () => {
    if (activeRow !== 1) return;
    setActiveRow(activeRow + 1);
  };

  let rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(
      <Row
        id={i}
        key={i}
        activeColor={props.activeColor}
        activeRow={activeRow}
        canCheck={canCheck}
      />
    );
  }

  return (
    <div>
      <div>{rows}</div>
    </div>
  );
};

export default Board;
