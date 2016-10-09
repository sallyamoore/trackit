import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';

import { styles } from './Styles';

export default class Record extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Record Here!</Text>
      </View>
    )
  }
}
