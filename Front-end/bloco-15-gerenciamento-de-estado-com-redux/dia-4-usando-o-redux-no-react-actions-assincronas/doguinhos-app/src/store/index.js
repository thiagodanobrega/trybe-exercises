import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

function getImage(json) {
  return { type: GET_IMAGE, payload: json.message };
}

function requestDog() {
  return { type: REQUEST_IMAGE };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchDog() {
  return async (dispatch) => {
    dispatch(requestDog());
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      dispatch(getImage(data));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}

const initialState = {
  isFetching: false,
  imagePath: '',
  error: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGE:
      return { ...state, isFetching: true };
    case GET_IMAGE:
      return { ...state, imagePath: action.payload, isFetching: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;