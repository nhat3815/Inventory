import React, {Component} from 'react';
import { View, StyleSheet } from "react-native";
import Login from './src/Component/Login/Index.js'
import { Provider } from "react-redux";
import {store} from './src/Reducer/Store.js';
import NavContainer from './src/Navigations/Navigation.js';

export default class App extends Component{
  render(){
    return (
      <View style={Styles.container}>
        <Provider store={store}>
          <NavContainer />
        </Provider>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

