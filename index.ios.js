/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class trackit extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome to TrackIt!
        </Text>
        <Icon
          name='play-circle'
          size={70}
          color='#000000'
        />
        <Text style={styles.subtitle}>
          track
        </Text>
        <Icon
          name='line-chart'
          size={70}
          color='#000000'
        />
        <Text style={styles.subtitle}>
          analyze
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('trackit', () => trackit);
