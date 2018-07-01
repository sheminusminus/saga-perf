import { take, takeEvery, fork, put, call } from 'redux-saga/effects';

export function* count() {
  yield window.i++;
}

/**
 * Generator function to listen for redux actions
 * Handles any action api requests as non-blocking calls
 * and returns the appropriate action responses.
 */
export default function* watch() {
  yield takeEvery('ACTION', count);
}
