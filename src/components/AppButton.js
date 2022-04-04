import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import CustomText, { FONT_WEIGHT, TEXT_SIZE } from './CustomText';
import colors from '../config/colors';

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <CustomText textSize={TEXT_SIZE.title} fontWeight={FONT_WEIGHT.bold} customTextStyle={styles.buttonText}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    width: '100%',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.white,
  },
});

export default AppButton;
