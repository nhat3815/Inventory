import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet, Button, Image} from 'react-native';
import * as homeAction from '../Home/StateHome';
import {bindActionCreators} from 'redux';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTasks } from '@fortawesome/free-solid-svg-icons'



class ItemHome extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('this.props.myItem',this.props.myItem);
  }

    render() {
        const {myItem}  = this.props;
        console.log(' Call Item menu', myItem);
        //ButtonClick.bind(this)
        return (
          <View style={styles.container}>
            <TouchableOpacity style = {
            styles.ButtonClick}  
            onPress={ButtonClick.bind(this)}>
      
             <Image 
                        style = {styles.imageBarcode}
                        source={require('../../../Image/icon/' + 'Check.png')}
                    />
             
              <Text style = {styles.TextMenu}>{myItem.Title}</Text>
            </TouchableOpacity>
          </View>
        );
    }
}

function ButtonClick(){
  const {myItem}  = this.props;
  console.log('Navigation: ' + myItem.navigation);
  this.props.navigation.navigate(myItem.navigation);
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    homeAction: bindActionCreators(homeAction, dispatch)
  };
};

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 100,
        height: 100,
        margin: 20,

    },

    imageBarcode:{
      height: 30,
      width:30,
      alignItems: 'flex-end',
      margin: 5,
  },

    ButtonClick:{
      height:100,
      width: 100,
      justifyContent:'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    icon: {
      flex:1,
      color: 'red',
      fontSize: 90,
    },
    TextMenu:{
      fontSize: 17,
      // fontWeight: "bold",
      textAlign: 'center',
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemHome)
