import React from 'react';
import Peg from './Peg';

const Circles = (props) => {
  let peg = [];
  for (let i = 0; i < 4; i++) {
    peg.push(
      <Peg
        key={'peg-' + i}
        id={'peg-' + i}
        activeColor={props.activeColor}
        activeRow={props.activeRow}
        id={props.id}
      />
    );
  }

  return <div>{peg}</div>;
};

export default Circles;
