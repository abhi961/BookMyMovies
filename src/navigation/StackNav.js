import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../screen/Auth/Splash';
import Loign from '../screen/Auth/Loign';
import TabNav from './TabNav';
import Details from '../screen/TabScreen/Details';


const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name='Login' component={Loign} />
        <Stack.Screen name='tabNav' component={TabNav} />
        <Stack.Screen name='details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
