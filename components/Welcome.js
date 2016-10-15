import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './Styles';


export default class Welcome extends Component {
  _navigate(sceneName) {
    this.props.navigator.push({
      name: sceneName, // Matches route.name
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >
          Welcome to TrackIt!
        </Text>
        <TouchableHighlight
          onPress={ () => this._navigate('record') }
          underlayColor='#F5FCFF'
        >
          <Text style={styles.subtitle}>
            <Icon
              name='play-circle'
              size={70}
              style={styles.icon}
            />
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={ () => this._navigate('record') }
          underlayColor='#F5FCFF'
        >
          <Text style={styles.subtitle}>record</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={ () => this._navigate('analyze') }
          underlayColor='#F5FCFF'
        >
        <Text style={styles.subtitle}>
            <Icon
              name='line-chart'
              size={70}
              style={styles.icon}
            />
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={ () => this._navigate('analyze') }
          underlayColor='#F5FCFF'
        >
        <Text style={styles.subtitle}>analyze</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
