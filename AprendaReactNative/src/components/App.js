import React, {Component} from 'react';
import Welcome from './Welcome';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles/App';

export default class App extends Component {
  state = {
    slogan: 'Seu canal de nerdologia',
  }

  alternar = () => {
    this.setState({
      slogan: this.state.slogan ? '' : 'Seu canal de nerdologia',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.alternar}>
          <Text>Mudar state</Text>
        </TouchableOpacity>
        <Text>Canal Geek Dev</Text>
        <Text>{this.state.slogan}</Text>
      </View>
    );
  }
}
