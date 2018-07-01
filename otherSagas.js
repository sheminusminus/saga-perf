import { take, takeEvery, fork, put, call } from 'redux-saga/effects';

/**
 * Generator function to listen for redux actions
 * Handles any action api requests as non-blocking calls
 * and returns the appropriate action responses.
 */
export default function* watch(index) {
  yield takeEvery('ACTION', function* count() {
    yield window.counters[index]++;
  });
}
