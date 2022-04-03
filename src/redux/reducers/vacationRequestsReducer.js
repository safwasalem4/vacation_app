import { GET_VACATIONS_REQUESTS } from '../constants';

const initialState = {
  vacationRequests: [],
};

const vacationRequestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VACATIONS_REQUESTS:
      return {
        ...state,
        vacationRequests: action.payload,
      };
    default:
      return state;
  }
};

export default vacationRequestsReducer;
