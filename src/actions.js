import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: "Bug1",
  },
});

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "Bug1",
//     },
//   };
// }

export const bugRemoved = (description) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
