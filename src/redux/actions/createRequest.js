import { API_LINK } from '../../config/constants';
import { CREATE_VACATION_REQUEST } from '../constants';

export function setRequestData(requestData) {
  return {
    type: CREATE_VACATION_REQUEST,
    payload: requestData,
  };
}

export function createVacationRequest(navigation, body) {
  return async (dispatch) => {
    try {
      const res = await fetch(API_LINK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const apiReq = await res.json();
      await dispatch(setRequestData(body));

      navigation.navigate('Home');

      return apiReq || [];
    } catch (error) {
      console.error(error);
    }
  };
}
