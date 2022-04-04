import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

import colors from '../config/colors';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => setTimeout(() => navigation.navigate('Home'), 1000), []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Image source={require('../config/images/home-logo.png')} style={styles.image} resizeMode={'contain'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: responsiveWidth(90),
    height: responsiveHeight(100),
  },
});

export default Splash;
