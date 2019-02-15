import { combineReducers } from 'redux';
import searchReducer from '../components/searchBox/searchReducer';


const rootReducer = combineReducers({
city: searchReducer

});

export default rootReducer;
