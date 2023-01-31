import React from 'react';
import { useContextSelector } from 'use-context-selector';
import { Stack, Button } from '@edx/paragon';

import { HooksContextSelectorsContext } from './HooksContextSelectorsProvider';
import useCounterActions from './data/useCounterActions';

const Count1 = () => {
  const count1 = useContextSelector(HooksContextSelectorsContext, v => v[0].count1);
  const { decrementCount1, incrementCount1 } = useCounterActions();

  return (
    <Stack direction="horizontal" gap={3}>
      <Button
        aria-label="Decrement value"
        onClick={decrementCount1}
        size="sm"
      >
        -
      </Button>
      <span>{count1}</span>
      <Button
        aria-label="Increment value"
        onClick={incrementCount1}
        size="sm"
      >
        +
      </Button>
      <p className="small mb-0">{Math.random()}</p>
    </Stack>
  );
};

export default Count1;
