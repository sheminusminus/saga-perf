import store from './store';

function start() {
  store.dispatch({ type: 'ACTION' });
}

start();