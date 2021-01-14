import React, {Component} from 'react';

import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Header from "./Header.js";
import PageHome from './PageHome.js';
import * as homeAction from '../Home/StateHome'
import {bindActionCreators} from 'redux'


class Home extends Component{

  componentDidMount(){
    this.props.homeAction.get_success()
  }

    render(){
        return (
          <View style={styles.container}>
            {/* <Header /> */}
            <PageHome navigation = {this.props.navigation}/>
          </View>
        );
    }
}
function mapStateToProps(state) {
return{
  
};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    homeAction: bindActionCreators(homeAction, dispatch)
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Home)