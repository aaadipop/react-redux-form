import {
  REQUEST_LOADING,
  GET_REQUEST,
  GET_REQUEST_ERROR
} from "./ExAction";

const initialState = {
  success: false,
  loading: false,
  payload: {
    name: "Ioana"
  },
  error: undefined,
};

const ExReducer = function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOADING:
      return {
        ...state,
        success: false,
        loading: true,
      };

    case GET_REQUEST:
      return {
        ...state,
        success: true,
        loading: false,
        type: action.type,
        payload: action.payload,
        error: undefined,
      };

    case GET_REQUEST_ERROR: {
      return {
        ...state,
        success: false,
        loading: false,
        type: action.type,
        error: action.payload.response.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default ExReducer;
