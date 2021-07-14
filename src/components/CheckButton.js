import React from 'react';

const CheckButton = (props) => {
  return (
    <button
      className={'check-button'}
      style={{
        color: props.activeRow !== props.row ? 'gainsboro' : 'rgb(151, 206, 68)'
      }}
      onClick={props.checkColors}
    >
      check
    </button>
  );
};

export default CheckButton;
