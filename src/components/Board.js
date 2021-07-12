import React, { useState } from 'react';
import Row from './Row';

const Board = (props) => {
  let rows = [];

  for (let i = 0; i < props.totalRows; i++) {
    rows.push(
      <Row
        id={i}
        key={i}
        activeColor={props.activeColor}
        activeRow={props.activeRow}
        checkColorPatern={props.checkColorPatern}
      />
    );
  }
  return <div className='board'>{rows}</div>;
};

export default Board;
