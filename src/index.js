import store from "./store";
import { bugAdded, bugRemoved } from "./actions";
// state = reducer(state, action);
// notify the subscribers
// state, dispatch & subscribe are the key parts of Redux

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));

unsubscribe();

store.dispatch(bugRemoved(1));
console.log(store.getState());
