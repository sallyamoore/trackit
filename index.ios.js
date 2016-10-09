/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Welcome from './Welcome';


class trackit extends Component {
  render() {
    return <Welcome />
  }
}

AppRegistry.registerComponent('trackit', () => trackit);
