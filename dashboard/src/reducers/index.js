import { combineReducers } from 'redux';


import containers from './container';
import images from './image';
import dashboard from './dashboard';


const rootReducer = combineReducers({
    containers : containers,
    images : images,
    dashboard:dashboard

});

export default rootReducer;