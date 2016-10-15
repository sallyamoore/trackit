import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import Analyze from './components/Analyze';
import Record from './components/Record';
import Welcome from './components/Welcome';


class trackit extends Component {
  renderScene(route, navigator) {
    if(route.name === 'welcome') {
      return <Welcome navigator={navigator} {...route.passProps}/>;
    }
    if(route.name === 'record') {
      return <Record navigator={navigator} {...route.passProps}/>;
    }
    if(route.name === 'analyze') {
      return <Analyze navigator={navigator} {...route.passProps}/>;
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
