import { FETCH_CONTAINERS,RECEIVE_CONTAINERS } from '../actions/container';
export default function containnerReducer(state ={isFetching :false , containers : []}, action) {

  switch (action.type) {

    case FETCH_CONTAINERS:

      return Object.assign({}, state, {
        isFetching: action.isFetching
      });

      case RECEIVE_CONTAINERS:

      return Object.assign({}, state, {
        isFetching: action.isFetching ,containers : action.containers
      });
    default:
      return state;

  }
}
