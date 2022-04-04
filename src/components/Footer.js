import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from './AppButton';

const Footer = ({ buttonTitle, onPress }) => {
  return (
    <View style={styles.footer}>
      <AppButton title={buttonTitle} onPress={onPress} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    marginBottom: 16,
  },
});
