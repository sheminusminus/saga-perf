import otherWatch from './otherSagas';

const makeWatch = (index) => otherWatch(index);

const watchers = [];
window.counters = [];

// 4250 === around the highest number of sagas i can spawn before
// the total ++ iterations starts dropping again
for (let i = 0; i < 4250; i++) {
  watchers.push(makeWatch(i));
  window.counters.push(0);
}

export default function* rootSagas() {
  yield watchers;
}
