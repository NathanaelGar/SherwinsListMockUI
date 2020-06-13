import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Info extends Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.image} />
        <Text style={styles.textTitle}>Nate Garcia</Text>
        <Text> Hollywood, FL</Text>
        <Text> Hi, I am a volunteer</Text>
        {/* <Image style={styles.text} source={require('./assets/splash.png')} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
  },

  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
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

export default Info;
