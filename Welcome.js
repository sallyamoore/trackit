import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Record from './Record';
import { styles } from './Styles';


export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome to TrackIt!
        </Text>
        <TouchableHighlight onPress={this.props.onForwardRecord}>
          <Text style={styles.subtitle}>
            <Icon
              name='play-circle'
              size={70}
              color='#000000'
            />
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onForwardAnalyze}>
          <Text style={styles.subtitle}>
            <Icon
              name='line-chart'
              size={70}
              color='#000000'
            />
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
