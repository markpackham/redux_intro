import store from "./store";
import { bugAdded, bugResolved, bugRemoved } from "./actions";
// state = reducer(state, action);
// notify the subscribers
// state, dispatch & subscribe are the key parts of Redux

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));
unsubscribe();
console.log(store.getState());
