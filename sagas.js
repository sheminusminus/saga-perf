import { take, takeEvery, fork, put } from 'redux-saga/effects';

import otherWatch from './otherSagas';

const makeWatch = () => otherWatch();
const watchers = [];
for (let i = 0; i < 10000; i++) {
  watchers.push(makeWatch());
}

export function* count() {
  yield window.i++;
}

/**
 * Generator function to listen for redux actions
 * Handles any action api requests as non-blocking calls
 * and returns the appropriate action responses.
 */
function* watch() {
  yield takeEvery('ACTION', count);
}

export default function* rootSagas() {
  yield [...watchers, watch()];
}
