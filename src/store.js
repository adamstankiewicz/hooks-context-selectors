import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './examples/basic-redux/data/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
