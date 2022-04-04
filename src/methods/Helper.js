import moment from 'moment';

export const formatDate = (date) => moment(date).format('DD-MM-YYYY');
export const getTomorrowDate = () => new Date().setDate(new Date().getDate() + 1);
