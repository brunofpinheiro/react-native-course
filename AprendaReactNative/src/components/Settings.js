import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class Settings extends Component {

  static navigationOptions = {
    drawerLabel: 'Configuração'
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/settings.png')}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
})