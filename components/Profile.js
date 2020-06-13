import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Info from './info';
import Skills from './skills';

class Profile extends Component {
  render() {
    return (
      <View>
        <Info />
        <Skills />
      </View>
    );
  }
}

export default Profile;
