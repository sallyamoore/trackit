/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import Welcome from './components/Welcome';
import Record from './components/Record';
import { styles } from './components/Styles';


class trackit extends Component {
  renderScene(route, navigator) {
    if(route.name === 'welcome') {
      return <Welcome navigator={navigator} {...route.passProps}/>;
    }
    if(route.name === 'record') {
      return <Record navigator={navigator} {...route.passProps}/>;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'welcome'}}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('trackit', () => trackit);
