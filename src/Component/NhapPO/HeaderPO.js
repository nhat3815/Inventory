import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';


import * as DnAction from "../DotNhanPO/StateDotNhan.js";
import * as PoAction from '../NhapPO/StateDataPO';
import {bindActionCreators} from 'redux'

 class HeaderPO extends Component {
   
    constructor(props){
        super(props);
        this.apply = this.apply.bind(this)
    }

    apply = (id) => {
        console.log('this.props.DnAction: ', id)
        this.props.DnActions.Apply_success(id,3);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View>
                <Text>Phần header</Text>
                <TouchableOpacity onPress={()=>{this.apply(this.props.id)}}>
                    <Text>Xác nhận</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})



const mapStateToProps = (state, ownProps) => {
    return {
        ItemPO: state.reducerNhapPO.item
    };
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      DnActions:bindActionCreators(DnAction, dispatch)
    };
}




export default connect(mapStateToProps, mapDispatchToProps)(HeaderPO)
