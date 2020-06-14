import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Profile from './components/Profile';
import MyTabs from './components/nav';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
  },

  textTitle: {
    fontWeight: 'bold',
  },

  nav: {
    position: 'absolute',
    bottom: 0,
  },

  textSubtitle: {},

  image: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    width: 70,
    height: 70,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'grey',
  },
});
