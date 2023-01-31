import { useCallback } from 'react';
import { useContextSelector } from 'use-context-selector';

import { HooksContextSelectorsContext } from '../HooksContextSelectorsProvider';

/**
 * Custom React hooks that acts as an interface to mutate the counter context.
 * @returns An object containing an increment and decrement function.
 */
const useCounterActions = () => {
  const setState = useContextSelector(HooksContextSelectorsContext, v => v[1]);

  // count 1
  const decrementCount1 = useCallback(() => setState(s => ({
    ...s,
    count1: s.count1 - 1,
  })), [setState]);
  const incrementCount1 = useCallback(() => setState(s => ({
    ...s,
    count1: s.count1 + 1,
  })), [setState]);

  // count 2
  const decrementCount2 = useCallback(() => setState(s => ({
    ...s,
    count2: s.count2 - 1,
  })), [setState]);
  const incrementCount2 = useCallback(() => setState(s => ({
    ...s,
    count2: s.count2 + 1,
  })), [setState]);

  return {
    decrementCount1,
    incrementCount1,
    decrementCount2,
    incrementCount2,
  };
};

export default useCounterActions;
