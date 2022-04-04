import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/screens/Splash';
import Home from './src/screens/home/Home';
import VacationRequestsController from './src/controllers/VacationRequestsController';
import RequestVacationController from './src/controllers/RequestVacationController';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="VacationRequestsController" component={VacationRequestsController} />
          <Stack.Screen name="RequestVacationController" component={RequestVacationController} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
