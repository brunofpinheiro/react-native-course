import React, {Component} from 'react';
import {Text, View} from 'react-native';

import styles from '../styles/App';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bem vindo a sua página Home</Text>
      </View>
    );
  }
}
