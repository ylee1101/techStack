import { combineReducers } from 'redux'; //reducer에 있는 파일들을 combine하기위한것
import LibraryReducer from './LibraryReducer'; //reducers에있는 파일들 다 집어넣기
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});

// state object have key of libraries and value of list of libraries