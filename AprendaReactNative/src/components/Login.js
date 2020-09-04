import React, {Component} from 'react';
import {
  Alert,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/App';

export default class Login extends Component {
  clicou = () => {
    Alert.alert('Canal GeekDev', 'Você clicou em mim');
  };

  state = {
    nome: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/react-logo.png')}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => (this.state.nome = text)}
          placeholder="Digite seu email"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
