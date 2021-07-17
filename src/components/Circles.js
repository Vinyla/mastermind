import React from 'react';
import Peg from './Peg';

const Circles = (props) => {
  const rowId = props.rowId.substr(4);
  let pegs = Array(4).fill(null);
  return (
    <div className='circles'>
      {pegs.map((peg, i) => (
        <Peg
          state={props.state}
          pegAction={props.pegAction}
          key={'p' + rowId + '-' + i}
          pegId={'p' + rowId + '-' + i}
        />
      ))}
    </div>
  );
};

export default Circles;
