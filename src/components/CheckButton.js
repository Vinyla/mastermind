import React from 'react';

const CheckButton = (props) => {
  return (
    <button
      className={'check-button'}
      disabled={props.activeRow !== props.row}
      style={{
        color: props.activeRow !== props.row ? 'gainsboro' : 'rgb(151, 206, 68)'
      }}
      onClick={props.checkWin}
    >
      check
    </button>
  );
};

export default CheckButton;
