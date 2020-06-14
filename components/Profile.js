import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Info from './info';
import Skills from './skills';

class Profile extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Info />
        <Skills />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default Profile;
