import React from 'react';
import { useContextSelector } from 'use-context-selector';
import { Stack, Button } from '@edx/paragon';

import { HooksContextSelectorsContext } from './HooksContextSelectorsProvider';
import useCounterActions from './data/useCounterActions';

const Count2 = () => {
  const count2 = useContextSelector(HooksContextSelectorsContext, v => v[0].count2);
  const { decrementCount2, incrementCount2 } = useCounterActions();

  return (
    <Stack direction="horizontal" gap={3}>
      <Button
        aria-label="Decrement value"
        onClick={decrementCount2}
        size="sm"
      >
        -
      </Button>
      <span>{count2}</span>
      <Button
        aria-label="Increment value"
        onClick={incrementCount2}
        size="sm"
      >
        +
      </Button>
      <p className="small mb-0">{Math.random()}</p>
    </Stack>
  );
};

export default Count2;
