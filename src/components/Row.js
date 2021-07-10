import React, { useState } from 'react';
import Peg from './Peg';

const Row = (props) => {
  const [active, setActive] = useState('');

  // if (props.activeRow === props.id) {
  //   setActive('active');
  // } else return;

  let peg = [];
  for (let i = 0; i < 4; i++) {
    peg.push(<Peg key={i} activeColor={props.activeColor} />);
  }

  return (
    <div>
      <div className={'rows ' + active}>
        <div className={'button-div'}>{peg}</div>
        <button onClick={props.canCheck}>check</button>
        <div>hint pegs</div>
      </div>
    </div>
  );
};

export default Row;
