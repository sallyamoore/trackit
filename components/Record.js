import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { styles } from './Styles';
import TopNavigation from './TopNavigation';

export default class Record extends Component {
  render() {
    return (
      <View style={styles.containerWithNav}>
        <TopNavigation navigator={this.props.navigator} />
        <Text style={styles.title}>Record Here!</Text>
      </View>
    )
  }
}
