import { combineReducers } from 'redux';


import containers from './container';
import images from './image';



const rootReducer = combineReducers({
    containers : containers,
    images : images

});

export default rootReducer;