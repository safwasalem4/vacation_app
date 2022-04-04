import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import CustomText, { FONT_WEIGHT, TEXT_SIZE } from '../../components/CustomText';
import colors from '../../config/colors';

const HomeButton = ({ buttonTitle, source, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Image source={source} resizeMode={'contain'} style={styles.image} />
      <CustomText
        textSize={TEXT_SIZE.h1}
        isCenter={true}
        fontWeight={FONT_WEIGHT.bold}
        customTextStyle={styles.customTextStyle}>
        {buttonTitle}
      </CustomText>
    </TouchableOpacity>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  customTextStyle: {
    color: colors.primary,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 32,
  },
  image: {
    width: responsiveWidth(30),
    height: responsiveWidth(50),
  },
});
