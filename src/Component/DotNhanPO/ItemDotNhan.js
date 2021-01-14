import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as DnAction from "./StateDotNhan.js";

export class ItemDotNhan extends Component {
    constructor(props){
        super(props)
    }



    render() {
        const {ItemDotNhan} = this.props;
        console.log('call Item List Dot Nhan', ItemDotNhan)
        return (
            <View>
                <View style={styles.container}>
                    <Text>Mã PO: {ItemDotNhan.POID}</Text>
                    <Text>Mã đợt nhận: {ItemDotNhan.DotNhan}</Text>
                    <Text>Ngày nhận: {ItemDotNhan.NgayNhan}</Text>
                    <Text>Hình Thức: {ItemDotNhan.HinhThuc}</Text>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin: 5,
        backgroundColor: '#cccccc'
    }
})

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        DnAction:bindActionCreators(DnAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDotNhan)
