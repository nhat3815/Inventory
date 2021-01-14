import React, {Component} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Text, Image} from 'react-native';
import { connect } from "react-redux";

 class Login extends Component{
    render(){
        return (
          <View style={styles.container}>
             <Image
              source={require('../../../Image/LogoMWG.png')}
              style={styles.imageLogo}
            />
            <TextInput style={styles.Textinputs} placeholder="UserName" />
            <TextInput
              style={styles.Textinputs}
              secureTextEntry={true}
              password={true}
              placeholder="Password"
            />
            <TouchableOpacity
              style={styles.ButtonLogin}
              onPress={LoginClick.bind(this)}>
              <Text style={styles.textLogin}>Đăng nhập</Text>
            </TouchableOpacity>
            {console.log('Trang login')} 
          </View>
        );
    }
}

function LoginClick() {
  this.props.dispatch({type: 'Login'});
}

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  imageLogo: {
    width: 200,
    height: 200,
    margin:10,
  },
  Textinputs: {
    width: 300,
    height: 50,
    margin: 10,
    borderRadius: 50,
    color: '#000000',
    backgroundColor: '#e6e6e6',
  },
  ButtonLogin: {
    backgroundColor: '#5BFF9D',
    height: 40,
    width: 300,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 20,
  },
  textLogin: {
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 12,
    color: '#000000',
  },
});

export default connect(mapStateToProps)(Login);

