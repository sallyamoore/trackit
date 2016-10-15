import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './Styles';


export default class TopNavigation extends Component {
  _navigate(sceneName) {
    this.props.navigator.push({
      name: sceneName,
    });
  }

  render() {
    return (
      <TouchableHighlight
        onPress={ () => this._navigate(this.props.sceneName) }
        underlayColor='#00C4C4'
      >
        <Icon name={this.props.iconName} style={styles.navIcon} size={30} />
      </TouchableHighlight>
    );
  }
}
