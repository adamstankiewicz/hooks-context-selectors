import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, Button } from '@edx/paragon';

import {
  decrementCount1,
  incrementCount1,
  selectCount1,
} from './data/counterSlice';

const Count1 = () => {
  const count1 = useSelector(selectCount1);
  const dispatch = useDispatch();

  return (
    <Stack direction="horizontal" gap={3}>
      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(decrementCount1())}
        size="sm"
      >
        -
      </Button>
      <span>{count1}</span>
      <Button
        aria-label="Increment value"
        onClick={() => dispatch(incrementCount1())}
        size="sm"
      >
        +
      </Button>
      <p className="small mb-0">{Math.random()}</p>
    </Stack>
  );
};

export default Count1;
