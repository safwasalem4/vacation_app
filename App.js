import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/screens/Splash';
import Home from './src/screens/home/Home';
import VacationRequests from './src/screens/vacationRequests/VacationRequests';
import RequestVacation from './src/screens/RequestVacation';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="VacationRequests" component={VacationRequests} />
          <Stack.Screen name="RequestVacation" component={RequestVacation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
