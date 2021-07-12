import React from 'react';

const CheckButton = (props) => {
  return (
    <button
      className={'check-button'}
      disabled={props.activeRow !== props.id}
      onClick={props.checkColorPatern}
    >
      check
    </button>
  );
};

export default CheckButton;
