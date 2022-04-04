import React from 'react';

import { formatDate, getTomorrowDate } from '../methods/Helper';

import KeyboardAvoidingComponent from '../components/KeyboardAvoidingComponent';
import SelectDate from '../components/SelectDate';
import Select from '../components/Select';
import Input from '../components/Input';

const RequestVacation = ({ onSubmit, inputs, setState }) => {
  const { name, replacementName, mobileNumber, startDate, requestedDays, selectDate, date, errors } = inputs;

  return (
    <KeyboardAvoidingComponent
      back
      footerButton
      header={'Create Vacation Request'}
      buttonTitle={'Submit Request'}
      onPressFooterButton={() => onSubmit()}>
      {/* Name */}
      <Input placeholder={'Name'} value={name} onChangeText={(name) => setState({ name })} error={errors.name} />

      {/* Replacement name */}
      <Input
        placeholder={'Replacement name'}
        value={replacementName}
        onChangeText={(replacementName) => setState({ replacementName })}
        error={errors.replacementName}
      />

      {/* Mobile number */}
      <Input
        placeholder={'Mobile number (Optional)'}
        value={mobileNumber}
        onChangeText={(mobileNumber) => setState({ mobileNumber })}
        keyboardType={'number-pad'}
        error={errors.mobileNumber}
      />

      {/* Start date */}
      <Select
        value={startDate ? formatDate(startDate) : 'Select vacation start date'}
        onPress={() => setState({ selectDate: true })}
        error={errors.startDate}
      />

      {/* Requested days */}
      <Input
        placeholder={'Number of requested days'}
        value={requestedDays}
        onChangeText={(requestedDays) => setState({ requestedDays })}
        keyboardType={'numeric'}
        error={errors.requestedDays}
      />

      {/* Select date modal */}
      <SelectDate
        isVisible={selectDate}
        minimumDate={getTomorrowDate()}
        date={date}
        onCancel={() => setState({ selectDate: false })}
        onConfirm={(dateSelected) =>
          setState({ selectDate: false, startDate: dateSelected, errors: { ...errors, startDate: undefined } })
        }
      />
    </KeyboardAvoidingComponent>
  );
};

export default RequestVacation;
