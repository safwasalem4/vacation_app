import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../config/colors';
import ErrorMessage from './ErrorMessage';

const Input = ({ searchIcon, placeholder, error, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {/* input view */}
      <View style={styles.inputContainer}>
        {searchIcon && (
          <AntDesign name={'search1'} size={responsiveWidth(4.8)} style={styles.searchIcon} color={colors.primary} />
        )}

        <TextInput
          autoCapitalize={'none'}
          underlineColorAndroid="transparent"
          style={styles.inputText}
          placeholder={placeholder}
          placeholderTextColor={colors.dark}
          {...otherProps}
        />
      </View>

      {/* error message */}
      {error && <ErrorMessage error={error} />}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    marginBottom: 16,
    borderRadius: 8,
  },
  inputContainer: {
    borderColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  inputText: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 16 : null,
    color: colors.dark,
    fontSize: responsiveFontSize(1.8),
  },
  searchIcon: {
    marginRight: 8,
  },
});
