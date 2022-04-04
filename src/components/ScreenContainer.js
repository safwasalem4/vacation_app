import React from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native';

import colors from '../config/colors';
import Header from './Header';

const ScreenContainer = ({ back, header, children, mainViewStyle }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaStyle} />
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />

      {/* header */}
      <Header header={header} back={back} />

      {/* main screen container */}
      <View style={[styles.mainView, mainViewStyle]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaStyle: {
    backgroundColor: colors.primary,
  },
  mainView: {
    backgroundColor: colors.gray,
    padding: 16,
  },
});

export default ScreenContainer;
