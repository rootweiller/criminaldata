/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

import Home       from './src/Home';
import Login      from './src/Login';
import Formulario from './src/Formulario';
import Profile    from './src/Profile';

export default class crimi extends Component {
  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene key="Login" component={Login} title="Login" initial={true} />
        <Scene key="Home" component={Home}/>
        <Scene key="Formulario" component={Formulario}/>
        <Scene key="Profile" component={Profile}/>
      </Scene>
    </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('crimi', () => crimi);
