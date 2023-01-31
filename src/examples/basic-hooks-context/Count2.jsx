import React, { useContext } from 'react';
import { Stack, Button } from '@edx/paragon';

import { BasicHooksContext } from './BasicHooksContextProvider';

const Count2 = () => {
  const {
    count2,
    decrementCount2,
    incrementCount2,
  } = useContext(BasicHooksContext);

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
