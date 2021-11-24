
import { createSelector } from 'reselect';
import { userStateSelector } from './app.selectors';
export const usersByIdSelector = createSelector([userStateSelector],(state) => state.byId);
export const usersSelector = createSelector([usersByIdSelector],(byId) => {
    const idsArray = Object.keys(byId);
    
    const ids:number[] = [];
    idsArray.map((id,index) => {
        return ids.push(+id);
    })
    return ids.map((id) => byId[id]);
});
export const userIdSelector = createSelector([userStateSelector], (state) => state.selectedId);

export const userSelector = createSelector([userIdSelector,usersByIdSelector] ,(id,byId) => id && byId[id] );
