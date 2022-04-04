import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomText, { TEXT_SIZE } from './CustomText';
import colors from '../config/colors';

const Select = ({ value, onPress, error }) => {
  console.log('value', value);
  return (
    <View style={styles.container}>
      {/* Input View */}
      <TouchableOpacity style={styles.inputView} onPress={onPress}>
        <CustomText textSize={TEXT_SIZE.body} customTextStyle={styles.inputText}>
          {value}
        </CustomText>

        {/* icon */}
        <MaterialCommunityIcons name={'calendar-blank-outline'} size={responsiveWidth(5)} color={colors.primary} />
      </TouchableOpacity>

      {/* error message */}
      {error && <ErrorMessage error={error} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  inputView: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
  },
  inputText: {
    color: colors.dark,
  },
});

export default Select;
