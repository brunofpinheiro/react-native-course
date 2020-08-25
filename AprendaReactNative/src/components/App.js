import React, {Component} from 'react';
import {Alert, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/App';

export default class App extends Component {
  clicou = () => {
    Alert.alert('Canal GeekDev', 'Você clicou em mim');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/react-logo.png')}
        />
        <TextInput style={styles.input} placeholder="Digite seu email" />
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Digite sua senha" />
        <TouchableOpacity style={styles.botao} onPress={() => {this.clicou()}}>
          <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
