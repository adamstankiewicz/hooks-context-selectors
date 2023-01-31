import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createContext } from 'use-context-selector';

export const HooksContextSelectorsContext = createContext(null);

const HooksContextSelectorsProvider = ({ children }) => {
  const contextValue = useState({
    count1: 0,
    count2: 0,
  });

  return (
    <HooksContextSelectorsContext.Provider value={contextValue}>
      {children}
    </HooksContextSelectorsContext.Provider>
  );
};

HooksContextSelectorsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HooksContextSelectorsProvider;
