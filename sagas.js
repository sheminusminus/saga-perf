import { take, takeEvery, fork, put } from 'redux-saga/effects';

export function* count() {
  try {
    window.i++;
    console.log(window.i);
    yield null;
  } catch (error) {
    console.log(error, error.message);
    yield null;
  }
}

/**
 * Generator function to listen for redux actions
 * Handles any action api requests as non-blocking calls
 * and returns the appropriate action responses.
 */
function* watch() {
  while (true) {
    const { type, payload = {} } = yield take([
      'ACTION',
    ]);

    let looping = true;
    let time = Date.now();

    switch (type) {
      case 'ACTION':
        while (looping) {
          window.i++;
          if (Date.now() >= time + 1000) looping = false;
        }
        console.log(window.i);
        break;

      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield watch();
}
