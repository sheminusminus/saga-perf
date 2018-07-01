import { take } from 'redux-saga/effects';

function* count() {
  yield null;
}

function* sagas() {
  const { type, payload } = yield take(['ACTION']);

  while (true) {
    switch (type) {
      default:
        yield null;
        break;
    }
  }
}

export default function* watch() {
  yield [sagas()];
}
