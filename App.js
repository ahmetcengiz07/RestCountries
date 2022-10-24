import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailCountry from './src/Pages/DetailCountry/DetailCountry';
import HomePage from './src/Pages/HomePage/HomePage';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="DetailCountry" component={DetailCountry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
