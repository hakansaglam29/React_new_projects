// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import First from './pages_lesson/first'
import Second from './pages_lesson/second'

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Firstpage' 
        screenOptions={{
            headerShown:false}}>
        <Stack.Screen name="Firstpage" component={First}  options={{ title: 'first' }}/>
        <Stack.Screen name="Secondpage" component={Second} options={{ title: 'second' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;