import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const BasicHooksContext = React.createContext();

const BasicHooksContextProvider = ({ children }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const contextValue = useMemo(() => ({
    count1,
    decrementCount1: () => { setCount1(s => s - 1); },
    incrementCount1: () => { setCount1(s => s + 1); },
    count2,
    decrementCount2: () => { setCount2(s => s - 1); },
    incrementCount2: () => { setCount2(s => s + 1); },
  }), [count1, count2]);

  return (
    <BasicHooksContext.Provider value={contextValue}>
      {children}
    </BasicHooksContext.Provider>
  );
};

BasicHooksContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicHooksContextProvider;
