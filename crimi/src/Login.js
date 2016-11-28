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

import t from 'tcomb-form-native';
import AwesomeButton from 'react-native-awesome-button';


var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
  email: t.String,
  pass: t.String,
});

var options = {}; // optional rendering options (see documentation)

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      buttonState: 'idle'
    };
    this.logIn = this.onPress.bind(this)

    this.navegador;
  }
  render() {

    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={Person}
          options={options}
        />
        <View style={{height:40}}>
        <AwesomeButton states={{
          backgroundStyle={styles.boton}
          transitionDuration={200}
          states={{
          idle: {
            text: 'Log In',
            onPress: this.logIn,
            backgroundColor: '#1155DD',
          },
          busy: {
            text: 'Logging In',
            backgroundColor: '#002299',
            spinner: true,
          },
          success: {
            text: 'Logged In',
            backgroundColor: '#339944'
          }
          }}
          buttonState={this.state.buttonState}
         />
        </View>
      </View>
    );
  }
  onPress(){

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
  boton:{
    flex:1,
    height:30
  },
  messageText: {
    textAlign:'center',
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  container: {
    flexGrow:1,
    height:100,
    padding:10,
    paddingTop:100,
  },

});
export default Login;
