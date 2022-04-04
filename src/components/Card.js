import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import CustomText, { FONT_WEIGHT, TEXT_SIZE } from '../components/CustomText';

const Card = ({ title, onPressCard, children, cardStyle }) => {
  return (
    <View style={[styles.container, cardStyle]} onPress={onPressCard} disabled={!onPressCard}>
      {/* Card Title */}
      <CustomText textSize={TEXT_SIZE.h2} fontWeight={FONT_WEIGHT.bold} customTextStyle={styles.customTextStyle}>
        {title}
      </CustomText>

      {/* Card Body */}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    alignSelf: 'center',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  customTextStyle: {
    color: colors.primary,
    marginBottom: 8,
  },
});

export default Card;
