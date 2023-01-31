import React, { useContext } from 'react';
import { Stack, Button } from '@edx/paragon';

import { HooksContextReducerContext, counterActions } from './HooksContextReducerProvider';

const Count1 = () => {
  const {
    count1,
    dispatch,
  } = useContext(HooksContextReducerContext);

  return (
    <Stack direction="horizontal" gap={3}>
      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(counterActions.decrementCount1())}
        size="sm"
      >
        -
      </Button>
      <span>{count1}</span>
      <Button
        aria-label="Increment value"
        onClick={() => dispatch(counterActions.incrementCount1())}
        size="sm"
      >
        +
      </Button>
      <p className="small mb-0">{Math.random()}</p>
    </Stack>
  );
};

export default Count1;
