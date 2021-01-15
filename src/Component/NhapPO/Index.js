import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from "react-native";

import  PageListPO  from "./PageListPO.js";
import * as PoAction from '../NhapPO/StateDataPO';
import {bindActionCreators} from 'redux'
import HeaderPO from './HeaderPO.js'
import * as DnAction from "../DotNhanPO/StateDotNhan.js";

import { log } from 'react-native-reanimated';

export class NhapPO extends Component {


  componentDidMount(){
    const dnid = this.props.route.params.dnid
    console.log('Get parram navigation: ', dnid)
    this.props.PoAction.get_success(dnid)
  }


    render() {
        return (
          <View>
            <HeaderPO id = {this.props.route.params.dnid} navigation = {this.props.navigation}/>

            <PageListPO/>
            </View>  
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      PoAction: bindActionCreators(PoAction, dispatch),
      DnAction:bindActionCreators(DnAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NhapPO)