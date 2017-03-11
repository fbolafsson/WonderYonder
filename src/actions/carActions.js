import constants from 'reduxConstants';
// import carEndpointApi from 'api/mockCarEndpointApi';
import carEndpointApi from 'api/carEndpointApi';

export function carLookupRequest() {
  return { type: constants.CAR.LOOKUP_REQUEST };
}

export function carLookupSuccess(information) {
  return { type: constants.CAR.LOOKUP_SUCCESS, information };
}

export function lookupCarNumber(carNumber) {

  return function(dispatch) {
    dispatch(carLookupRequest());
    return carEndpointApi.lookupAxios(carNumber)
      .then((data) => {
        dispatch(carLookupSuccess(data.results[0]));
      })
      .catch((error) => {
        throw error;
      });
  };

}
