import { combineReducers } from 'redux';

import hello from './hello';

import containers from './container';



const rootReducer = combineReducers({
    hello: hello,
    containers : containers

});

export default rootReducer;