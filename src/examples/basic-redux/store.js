import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './data/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
