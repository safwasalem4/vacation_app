import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomText, { FONT_WEIGHT, TEXT_SIZE } from './CustomText';
import colors from '../config/colors';

const Header = ({ back, header }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* back button */}
      {back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={'chevron-back'} size={responsiveFontSize(2.5)} color={colors.gray} />
        </TouchableOpacity>
      )}

      {/* header */}
      <CustomText textSize={TEXT_SIZE.h2} fontWeight={FONT_WEIGHT.bold} customTextStyle={styles.customTextStyle}>
        {header}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },
  customTextStyle: {
    flex: 1,
    color: colors.white,
    textAlign: 'center',
  },
});

export default Header;
