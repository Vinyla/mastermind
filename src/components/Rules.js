import React, { useState } from 'react';

const Rules = () => {
  const [showRules, setShowRules] = useState(false);

  const showRulesInfo = () => {
    if (showRules) {
      setShowRules(false);
    } else setShowRules(true);
  };

  return (
    <div className={'rules'}>
      <h3 onClick={showRulesInfo}>{showRules ? 'Hide Rules' : 'Show Rules'}</h3>
      {showRules && (
        <p>
          Try to guess the pattern, in both order and color, within ten turns.
          After submitting a row, a small green squared is show for each circle
          in a correct position and color. A yellow square indicates the
          existence of a correct color in an incorrect position. More info on
          &nbsp;
          <a
            href='https://en.wikipedia.org/wiki/Mastermind_(board_game)'
            target='_blank'
            rel='noreferrer'
          >
            Wikipedia
          </a>
        </p>
      )}
    </div>
  );
};

export default Rules;
