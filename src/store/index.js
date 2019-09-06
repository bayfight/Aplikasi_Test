import { combineReducers } from 'redux';
import labels from './reducers/labels';
import notes from './reducers/notes';
const rootReducer = combineReducers({
    labels,
    notes,
});
export default rootReducer;