export const REQUEST_LOADING = "REQUEST_LOADING";
export const GET_REQUEST = "GET_REQUEST";
export const GET_REQUEST_ERROR = "GET_REQUEST_ERROR";

export function getRequest(id) {
  return dispatch => {
    dispatch({
      type: REQUEST_LOADING,
      payload: "123"
    });
  };
}

export function postRequest(form) {
  return dispatch => {
    dispatch({
      type: GET_REQUEST,
      payload: {name: 'Ioana new name'}
    });
  };
}

// export const getRequest = (id) => dispatch => {
//   dispatch({type: REQUEST_LOADING});
//   api.get(process.env.REACT_APP_PROVIDER_SERVICE + localStorageService.getCurrentUserId() + "/stats/" + id).then(res => {
//     dispatch({
//       type: GET_STATS,
//       payload: res.data
//     });
//   }).catch(error => {
//     return dispatch({
//       type: GET_STATS_ERROR,
//       payload: error
//     });
//   });
// };
