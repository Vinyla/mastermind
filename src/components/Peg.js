import React, { useState } from 'react';

const Peg = (props) => {
  const [defaultPegColor, setDefaultPegColor] = useState('gainsboro');

  const changePegColor = () => {
    setDefaultPegColor(props.activeColor);
  };

  return (
    <button
      className={'circle-peg'}
      disabled={props.activeRow !== props.row}
      style={{
        background: defaultPegColor
      }}
      onClick={changePegColor}
    ></button>
  );
};
export default Peg;
