import React from 'react';
import { SafeAreaView, StatusBar, ScrollView, KeyboardAvoidingView, StyleSheet, Platform, View } from 'react-native';

import colors from '../config/colors';
import Header from './Header';
import Footer from './Footer';

const KeyboardAvoidingComponent = ({
  back,
  header,
  mainViewStyle,
  children,
  footerButton,
  buttonTitle,
  onPressFooterButton,
}) => {
  return (
    <KeyboardAvoidingView behavior={'padding'} enabled={Platform.OS === 'ios'} style={styles.container}>
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaStyle} />
        <StatusBar backgroundColor={colors.white} barStyle={'light-content'} />
        <Header header={header} back={back} />

        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled>
          {/* main view */}
          <View style={[styles.mainView, mainViewStyle]}>{children}</View>

          {/* footer */}
          {footerButton && <Footer buttonTitle={buttonTitle} onPress={onPressFooterButton} />}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: colors.primary,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  scroll: {
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
    padding: 16,
  },
  mainView: {
    alignItems: 'center',
  },
  footer: {
    marginBottom: 16,
  },
});

export default KeyboardAvoidingComponent;
