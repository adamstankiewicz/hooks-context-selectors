export const initialState = {
  count1: 0,
  count2: 0,
};

// Actions
export const actions = ({
  decrementCount1: () => ({
    type: 'decrementCount1',
  }),
  incrementCount1: () => ({
    type: 'incrementCount1',
  }),
  decrementCount2: () => ({
    type: 'decrementCount2',
  }),
  incrementCount2: () => ({
    type: 'incrementCount2',
  }),
});

function counterReducer(state, action) {
  switch (action.type) {
    case 'decrementCount1':
      return {
        ...state,
        count1: state.count1 - 1,
      };
    case 'incrementCount1':
      return {
        ...state,
        count1: state.count1 + 1,
      };
    case 'decrementCount2':
      return {
        ...state,
        count2: state.count2 - 1,
      };
    case 'incrementCount2':
      return {
        ...state,
        count2: state.count2 + 1,
      };
    default:
      throw Error('Unknown action.');
  }
}

export default counterReducer;
