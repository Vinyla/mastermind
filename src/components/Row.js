import React, { useState } from 'react';
import Peg from './Peg';
import CheckButton from './CheckButton';
import Hints from './Hints';

const Row = (props) => {
  return (
    <div
      className={'rows'}
      style={{
        border:
          props.activeRow === props.id
            ? '3px solid rgb(151, 206, 68)'
            : '3px solid gainsboro'
      }}
    >
      {Array(4)
        .fill(null)
        .map((peg, i) => (
          <Peg
            key={i}
            id={i}
            row={props.id}
            activeColor={props.activeColor}
            activeRow={props.activeRow}
          />
        ))}
      <CheckButton
        activeRow={props.activeRow}
        setActiveRow={props.setActiveRow}
        row={props.id}
        checkWin={props.checkWin}
      />
      {Array(4)
        .fill(null)
        .map((hint, i) => (
          <Hints key={i} id={i} />
        ))}
    </div>
  );
};

export default Row;
