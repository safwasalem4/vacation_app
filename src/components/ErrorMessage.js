import React from 'react';
import { StyleSheet } from 'react-native';

import CustomText, { TEXT_SIZE } from './CustomText';
import colors from '../config/colors';

const ErrorMessage = ({ error }) => {
  return (
    <CustomText textSize={TEXT_SIZE.caption} customTextStyle={styles.errorText}>
      {error}
    </CustomText>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  errorText: {
    marginTop: 8,
    color: colors.error,
    alignSelf: 'flex-start',
  },
});
