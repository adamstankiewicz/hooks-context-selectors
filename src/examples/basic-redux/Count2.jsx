import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, Button } from '@edx/paragon';

import {
  decrementCount2,
  incrementCount2,
  selectCount2,
} from './data/counterSlice';

const Count2 = () => {
  const count1 = useSelector(selectCount2);
  const dispatch = useDispatch();

  return (
    <Stack direction="horizontal" gap={3}>
      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(decrementCount2())}
        size="sm"
      >
        -
      </Button>
      <span>{count1}</span>
      <Button
        aria-label="Increment value"
        onClick={() => dispatch(incrementCount2())}
        size="sm"
      >
        +
      </Button>
      <p className="small mb-0">{Math.random()}</p>
    </Stack>
  );
};

export default Count2;
