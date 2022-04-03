import { API_LINK } from '../../config/constants';
import { GET_VACATIONS_REQUESTS } from '../constants';

export function setVacationRequests(vacationRequests) {
  return {
    type: GET_VACATIONS_REQUESTS,
    payload: vacationRequests,
  };
}

export function getVacationRequests(navigation) {
  return async (dispatch) => {
    try {
      const res = await fetch(API_LINK, {
        method: 'GET',
      });

      const apiReq = await res.json();
      await dispatch(setVacationRequests(apiReq));

      navigation.navigate('VacationRequests');

      return apiReq || [];
    } catch (error) {
      console.error(error);
    }
  };
}
