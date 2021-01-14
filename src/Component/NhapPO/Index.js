import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from "react-native";

import  PageListPO  from "./PageListPO.js";
import * as PoAction from '../NhapPO/StateDataPO';
import {bindActionCreators} from 'redux'
import {HeaderPO} from './HeaderPO.js'

import { log } from 'react-native-reanimated';

export class NhapPO extends Component {


  componentDidMount(){
    this.props.PoAction.get_success()
  }


    render() {
        return (
          <View>
            <HeaderPO />

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
      PoAction: bindActionCreators(PoAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NhapPO)