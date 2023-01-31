import React, { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

import counterReducer, {
  initialState as initialCounterState,
  actions as counterActions,
} from './data/reducer';

export const HooksContextReducerContext = React.createContext();

export { counterActions };

const BasicHooksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  const contextValue = useMemo(() => ({
    count1: state.count1,
    count2: state.count2,
    dispatch,
  }), [state]);

  return (
    <HooksContextReducerContext.Provider value={contextValue}>
      {children}
    </HooksContextReducerContext.Provider>
  );
};

BasicHooksContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicHooksContextProvider;
