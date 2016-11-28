'use strict';

import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
  Text,
  View,
} from 'react-native';



class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
    this.navegador;
  }
  render() {

    return (
      <View style={styles.container}>


      </View>
    );
  }
  componentDidMount() {

  }
  renderScene(route, nav) {


  }
  componentWillUnmount() {
    this._listeners && this._listeners.forEach(listener => listener.remove());
  }

}
var styles = StyleSheet.create({

  messageText: {
    textAlign:'center',
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  imageContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
    flexDirection:'column',
    flex: 1
  },
  headerLogo: {flex:1,
  },
  scene: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  }
});
export default Home;
