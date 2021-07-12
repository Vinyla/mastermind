import React, { useState } from 'react';
import CheckButton from './CheckButton';
import Circles from './Circles';
import Hints from './Hints';

const Row = (props) => {

  let active = '';
  if (props.activeRow === props.id) {
    active = 'active';
  }

  return (
    <div className={'rows ' + active}>
      <Circles
        activeColor={props.activeColor}
        activeRow={props.activeRow}
        id={props.id}
      />
      <CheckButton
        activeRow={props.activeRow}
        id={props.id}
        checkColorPatern={props.checkColorPatern}
      />
      <Hints />
    </div>
  );
};

export default Row;
