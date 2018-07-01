import { combineReducers } from 'redux';

const initState = {};

function reduceIt(state = initState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  reduceIt,
});

