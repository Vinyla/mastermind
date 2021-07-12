import React, { useState } from 'react';

const Peg = (props) => {
  const [background, setBackground] = useState();
  return (
    <button
      disabled={props.activeRow !== props.id}
      className={'circle-peg'}
      onClick={() => setBackground(props.activeColor)}
      style={{ background: background }}
    ></button>
  );
};

export default Peg;