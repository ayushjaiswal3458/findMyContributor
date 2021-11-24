import { authsStateSelector } from "./app.selectors";
import { createSelector } from "reselect";
import { usersByIdSelector } from "./users.selectors";

export const meIdSelector = createSelector(
  [authsStateSelector],
  (state) => state.id
);
export const meSelector = createSelector(
  [meIdSelector, usersByIdSelector],
  (id, byId) =>  id === undefined ? undefined : byId[id]
);
