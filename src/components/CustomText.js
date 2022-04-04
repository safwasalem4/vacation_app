import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../config/colors';

const TEXT_SIZE = {
  h1: 'h1',
  h2: 'h2',
  title: 'title',
  body: 'body',
};

const FONT_WEIGHT = {
  bold: 'bold',
  semiBold: 'semiBold',
  light: 'light',
};

const CustomText = ({ children, textSize, fontWeight, isCenter = false, customTextStyle, numberOfLines, onPress }) => {
  return (
    <Text
      style={[styles.general, styles[textSize], styles[fontWeight], styles[isCenter], customTextStyle]}
      numberOfLines={numberOfLines}
      onPress={onPress}>
      {children}
    </Text>
  );
};

export { TEXT_SIZE, FONT_WEIGHT };
export default CustomText;

const styles = StyleSheet.create({
  general: {
    color: colors.dark,
  },
  bold: {
    fontWeight: 'bold',
  },
  semiBold: {
    fontWeight: '500',
  },
  light: {
    fontWeight: '100',
  },
  h1: {
    fontSize: responsiveFontSize(3.5),
  },
  h2: {
    fontSize: responsiveFontSize(2.3),
  },
  title: {
    fontSize: responsiveFontSize(2),
  },
  body: {
    fontSize: responsiveFontSize(1.8),
  },
  center: {
    textAlign: 'center',
  },
});
