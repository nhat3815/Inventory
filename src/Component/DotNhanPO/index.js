import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as DnAction from "../DotNhanPO/StateDotNhan.js";
import {bindActionCreators} from 'redux'
import PageDotNhan from "./PageDotNhan.js";

export class DotNhanPO extends Component {

    componentDidMount(){
        const { navigation } = this.props;
        const poid = navigation.getParam('poid','poid')
        console.log('Aloooooo: ', poid)
        // console.log('para', this.props.navigation.getParam(poid, ''))
        this.props.DnAction.getItemDNToPO()
    }

    render() {
        return (
            <View>
                <Text> Đợt nhận </Text>
                <PageDotNhan/>
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        DnAction:bindActionCreators(DnAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DotNhanPO)
