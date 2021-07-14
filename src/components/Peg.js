import React, { useState } from 'react';

const Peg = (props) => {
  const [defaultColor, setDefaultColor] = useState('gainsboro');

  const changePegColor = () => {
    setDefaultColor(props.activeColor);
  };

  return (
    <button
      className={'circle-peg'}
      disabled={props.activeRow !== props.row}
      style={{
        background: defaultColor
      }}
      onClick={changePegColor}
    ></button>
  );
};
export default Peg;
