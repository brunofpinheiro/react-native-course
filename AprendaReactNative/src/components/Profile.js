import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Profile extends Component {

  static navigationOptions = {
    drawerLabel: 'Perfil'
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/profile.png')}></Image>
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