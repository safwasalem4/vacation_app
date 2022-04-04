import React, { Component } from 'react';

import { formatDate, getTomorrowDate } from '../methods/Helper';

import KeyboardAvoidingComponent from '../components/KeyboardAvoidingComponent';
import SelectDate from '../components/SelectDate';
import Select from '../components/Select';
import Input from '../components/Input';

export default class RequestVacation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      replacementName: '',
      mobileNumber: '',
      startDate: '',
      requestedDays: '',
      selectDate: false,
      errors: {
        name: undefined,
        replacementName: undefined,
        mobileNumber: undefined,
        startDate: undefined,
        requestedDays: undefined,
      },
    };
  }

  render() {
    const { errors, name, replacementName, mobileNumber, startDate, requestedDays, selectDate, date } = this.state;

    function onSubmit() {
      console.log('onSubmit');
    }

    return (
      <KeyboardAvoidingComponent
        back
        footerButton
        header={'Create Vacation Request'}
        buttonTitle={'Submit Request'}
        onPressFooterButton={() => onSubmit()}>
        {/* Name */}
        <Input placeholder={'Name'} value={name} onChangeText={(text) => setSearchText(text)} error={errors.name} />

        {/* Replacement name */}
        <Input
          placeholder={'Replacement name'}
          value={replacementName}
          onChangeText={(text) => setSearchText(text)}
          error={errors.replacementName}
        />

        {/* Mobile number */}
        <Input
          placeholder={'Mobile number (Optional)'}
          value={mobileNumber}
          onChangeText={(text) => setSearchText(text)}
          keyboardType={'number-pad'}
          error={errors.mobileNumber}
        />

        {/* Start date */}
        <Select
          value={startDate ? formatDate(startDate) : 'Select vacation start date'}
          onPress={() => setSelectDate(true)}
          error={errors.startDate}
        />

        {/* Requested days */}
        <Input
          placeholder={'Number of requested days'}
          value={requestedDays}
          onChangeText={(text) => setSearchText(text)}
          error={errors.requestedDays}
        />

        {/* Select date modal */}
        <SelectDate
          isVisible={selectDate}
          minimumDate={getTomorrowDate()}
          date={date}
          onCancel={() => setSelectDate(false)}
          onConfirm={(dateSelected) => {
            setSelectDate(false);
            setDate(dateSelected);
          }}
        />
      </KeyboardAvoidingComponent>
    );
  }
}
