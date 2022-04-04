import React from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';

const SelectDate = ({ isVisible, onConfirm, onCancel, ...otherProps }) => {
  return (
    <DateTimePicker
      mode={'date'}
      datePickerModeAndroid={'spinner'}
      isVisible={isVisible}
      onConfirm={onConfirm}
      onCancel={onCancel}
      {...otherProps}
    />
  );
};
export default SelectDate;
