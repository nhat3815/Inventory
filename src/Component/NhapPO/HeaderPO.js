import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import * as PoAction from '../NhapPO/StateDataPO';
import {bindActionCreators} from 'redux'


export class HeaderPO extends Component {
   
    constructor(props){
        super(props);
    }

    apply(){
        console.log('this.props.PoAction: ',this.props.PoAction)
        // this.props.PoAction.Apply_success()
    }

    render() {
        const {ItemPO} = this.props;
        console.log("Header Nhận: ",ItemPO)
        return (
            <View>
                <Text>Phần header</Text>
                <TouchableOpacity onPress={()=>this.apply()}>
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
      PoAction: bindActionCreators(PoAction, dispatch)
    };
}




export default connect(null, mapDispatchToProps)(HeaderPO)
