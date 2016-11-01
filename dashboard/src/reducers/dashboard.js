import { FETCH_DATA,RECEIVE_DATA } from '../actions/dashboard';
export default function containnerReducer(state ={isFetching :false , data : {memory:0,cpu: 0}}, action) {

  switch (action.type) {

    case FETCH_DATA:

      return Object.assign({}, state, {
        isFetching: action.isFetching
      });

      case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: action.isFetching ,data : action.data
      });
    default:
      return state;

  }
}
