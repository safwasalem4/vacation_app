import React from 'react';
import { StyleSheet, View } from 'react-native';

import CustomText from './CustomText';

const RowText = ({
  textOne,
  textTwo,
  textOneType,
  textTwoType,
  textOneWeight,
  textTwoWeight,
  textOneStyle,
  textTwoStyle,
}) => (
  <>
    <View style={styles.container}>
      {/* textOne */}
      <CustomText textSize={textOneType} fontWeight={textOneWeight} customTextStyle={textOneStyle}>
        {textOne}
      </CustomText>

      {/* textTwo */}
      <CustomText textSize={textTwoType} fontWeight={textTwoWeight} customTextStyle={textTwoStyle}>
        {textTwo}
      </CustomText>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8,
  },
});

export default RowText;
