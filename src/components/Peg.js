import React, { useState } from 'react';

const Peg = (props) => {
  const [background, setBackground] = useState();

  return (
        <button
          className={'circle-peg'}
          onClick={() => setBackground(props.activeColor)}
          style={{ background: background }}
        ></button>
  );
};

export default Peg;
