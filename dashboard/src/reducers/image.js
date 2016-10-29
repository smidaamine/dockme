import { FETCH_IMAGES,RECEIVE_IMAGES } from '../actions/images';
export default function containnerReducer(state ={isFetching :false , images : []}, action) {

  switch (action.type) {

    case FETCH_IMAGES:

      return Object.assign({}, state, {
        isFetching: action.isFetching
      });

      case RECEIVE_IMAGES:

      return Object.assign({}, state, {
        isFetching: action.isFetching ,images : action.images
      });
    default:
      return state;

  }
}
