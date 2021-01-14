import React, { Component } from 'react'
import {Image,View, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native'
import { connect } from 'react-redux'

export class Header extends Component {
    render() {
        return (
          <View style={styles.container}>
           <Image
              source={require('../../../Image/LogoMWG.png')}
              style={styles.imageLogo}
            />

            <TextInput
              style={styles.TextSearch}
              placeholder="Nhập để tìm kiếm..."
            >
            </TextInput>
            <TouchableOpacity style ={styles.ButtonClick}>
                <Text>
                    Search
                </Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const styles = StyleSheet.create({
  container: {
    height:60,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
    margin:0,
    flexDirection:'row',
    backgroundColor:'#ffff00'
  },

  TextSearch: {
    flex:5,
    height: 50,
    margin: 10,
    borderRadius: 50,
    backgroundColor: '#fafafa',
    fontSize: 15,
    alignContent: 'center',
  },
  ButtonClick: {
    flex:1,
    height: 50,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#fafafa',
    borderRadius: 50,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    fontSize: 15,
  },
  imageLogo: {
    width: 50,
    height: 50,
    margin:10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
