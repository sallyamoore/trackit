import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './Styles';
import NavIcon from './NavIcon';

export default class TopNavigation extends Component {
  render() {
    return (
      <View style={styles.navContainer}>
        <NavIcon
          sceneName='welcome'
          iconName='home'
          navigator={this.props.navigator}
        />
        <NavIcon
          sceneName='record'
          iconName='play-circle'
          navigator={this.props.navigator}
        />
        <NavIcon
          sceneName='analyze'
          iconName='line-chart'
          navigator={this.props.navigator}
        />
      </View>
    )
  }
}
