import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {enableScreens} from 'react-native-screens'
// import Home from '../Component/Home/index.js';
// import Login from '../Component/Login/Index.js';
import { Home, Login, NhapPO, SearchPO, DotNhanPO } from "../Component/RootComponent.js";

import { connect } from "react-redux";
enableScreens();
const Stack = createNativeStackNavigator();

class NavContainer extends React.Component {
  render(){
     return (
       <NavigationContainer>
         <Stack.Navigator
           screenOptions={{
             headerShown: false,
           }}
           initialRouteName="HomeNav">
           <Stack.Screen name="HomeNav" component={Home} />
           <Stack.Screen name="LoginNav" component={Login} />
           <Stack.Screen name="NhapPONav" component={NhapPO} />
           <Stack.Screen name="SearchPONav" component={SearchPO}/>
           <Stack.Screen name="DotNhanPONav" component={DotNhanPO}/>
           {/* <Stack.Screen name="ScanQRNav" component={scanQR}/> */}
         </Stack.Navigator>
       </NavigationContainer>
     );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);

