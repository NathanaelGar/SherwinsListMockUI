import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Profile from './Profile';

function Posts() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Posts!</Text>
    </View>
  );
}

function Talent() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Talent!</Text>
    </View>
  );
}

function Chat() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat!</Text>
    </View>
  );
}

function Saved() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Saved!</Text>
    </View>
  );
}

function ProfileNav() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Profile />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Profile'
      tabBarOptions={{
        activeTintColor: 'blue',
      }}
    >
      <Tab.Screen
        name='List'
        component={Posts}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='format-list-bulleted'
              size={24}
              color='black'
            />
          ),
        }}
      />

      <Tab.Screen
        name='Talent'
        component={Talent}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='account-group'
              size={24}
              color='black'
            />
          ),
        }}
      />

      <Tab.Screen
        name='Chat'
        component={Chat}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='chat-outline'
              size={24}
              color='black'
            />
          ),
        }}
      />

      <Tab.Screen
        name='Saved'
        component={Saved}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='heart-outline'
              size={24}
              color='black'
            />
          ),
        }}
      />

      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='account-outline'
              size={24}
              color='blue'
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
