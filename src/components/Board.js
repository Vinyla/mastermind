import React from 'react';
import Row from './Row';

const Board = (props) => {
  let rows = Array(10).fill(null);
  return (
    <div className='board'>
      {rows.map((row, i) => (
        <Row
          key={'row_' + i}
          id={'row_' + i}
          state={props.state}
          pegAction={props.pegAction}
          checkAction={props.checkAction}
        />
      ))}
    </div>
  );
};

export default Board;
