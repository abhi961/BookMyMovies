import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Movies from '../screen/TabScreen/Movies';
import {IMAGE} from '../theme/image';
import {COLOR} from '../theme/Color';
import MapScreen from '../screen/MapScreen';
import Profile from '../screen/TabScreen/Profile';


const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="mapscreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 55,
          paddingBottom: 0,
          paddingTop: 0,
          backgroundColor: '#fff',
          shadowColor: '#cc0052',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.18,
          shadowRadius: 4.59,
          elevation: 5,
        },
      }}>
      <Tab.Screen
        name="mapscreen"
        component={MapScreen}
        options={{
          tabBarShowLabel: false,

          tabBarInactiveTintColor: '#4d4d4d',
          tabBarActiveTintColor: COLOR.blue,
          tabBarIcon: ({focused, size}) => (
            <View
              style={[
                styles.circleView,
                // {backgroundColor: focused ? '#ffb3b3' : null},
              ]}>
              <Image
                source={IMAGE.MapImg}
                style={{
                  resizeMode: 'contain',
                  width: normalize(20),
                  height: normalize(20),
                  tintColor: focused ? COLOR.Darkblack : COLOR.gray,
                  // transform: [focused ? {rotate: '45deg'} : {rotate: '0deg'}],
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarShowLabel: false,

          tabBarInactiveTintColor: '#4d4d4d',
          tabBarActiveTintColor: COLOR.blue,
          tabBarIcon: ({focused, size}) => (
            <View
              style={[
                styles.circleView,
                // {backgroundColor: focused ? '#ffb3b3' : null},
              ]}>
              <Image
                source={IMAGE.Movies}
                style={{
                  resizeMode: 'contain',
                  width: normalize(20),
                  height: normalize(20),
                  tintColor: focused ? COLOR.Darkblack : COLOR.gray,
                  // transform: [focused ? {rotate: '45deg'} : {rotate: '0deg'}],
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name='Profile' component={Profile} 
       options={{
        tabBarShowLabel: false,

        tabBarInactiveTintColor: '#4d4d4d',
        tabBarActiveTintColor: COLOR.blue,
        tabBarIcon: ({focused, size}) => (
          <View
            style={[
              styles.circleView,
              // {backgroundColor: focused ? '#ffb3b3' : null},
            ]}>
            <Image
              source={IMAGE.user}
              style={{
                resizeMode: 'contain',
                width: normalize(20),
                height: normalize(20),
                tintColor: focused ? COLOR.Darkblack : COLOR.gray,
                // transform: [focused ? {rotate: '45deg'} : {rotate: '0deg'}],
              }}
            />
          </View>
        ),
      }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
