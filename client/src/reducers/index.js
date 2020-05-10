//importing the combine reducers ability from redux
import {combineReducers} from 'redux';

//importing the indiviudal reducers
import userSelections from './userSelections';

export default combineReducers({
    userSelections,
});