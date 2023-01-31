import React, { useContext } from 'react';
import { Stack, Button } from '@edx/paragon';

import { BasicHooksContext } from './BasicHooksContextProvider';

const Count1 = () => {
  const {
    count1,
    decrementCount1,
    incrementCount1,
  } = useContext(BasicHooksContext);

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
