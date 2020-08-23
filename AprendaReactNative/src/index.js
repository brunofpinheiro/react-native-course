import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import styles from './styles/index';

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Olá Canal GeekDev</Text>
        <Text style={styles.slogan}>Seu canal de nerdologia</Text>
      </View>
    );
  }
}
