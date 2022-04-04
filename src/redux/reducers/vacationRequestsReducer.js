import { CREATE_VACATION_REQUEST, GET_VACATIONS_REQUESTS } from '../constants';

const initialState = {
  vacationRequests: [],
  requestData: {
    name: '',
    replacementName: '',
    mobileNumber: '',
    startDate: '',
    requestedDays: '',
    selectDate: false,
  },
};

const vacationRequestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VACATIONS_REQUESTS:
      return {
        ...state,
        vacationRequests: action.payload,
      };
    case CREATE_VACATION_REQUEST:
      return {
        ...state,
        requestData: action.payload,
      };
    default:
      return state;
  }
};

export default vacationRequestsReducer;
