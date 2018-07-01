import store from './store';

function start() {
  let time = Date.now();
  const int = setInterval(() => {
    store.dispatch({ type: 'ACTION' });
    if (Date.now() >= time + 1000) {
      clearInterval(int);
      console.log(window.i);
    }
  }, 100);
}

start();
