import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Skills extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.textTitle}>Skills</Text>
        <View style={styles.image} />
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

export default Skills;
