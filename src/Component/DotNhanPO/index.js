import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as DnAction from "../DotNhanPO/StateDotNhan.js";
import {bindActionCreators} from 'redux'
import PageDotNhan from "./PageDotNhan.js";

export class DotNhanPO extends Component {

    componentDidMount(){
        // console.log('para', this.props.navigation.getParam(poid, ''))
        const poid = this.props.route.params.poids
        console.log('Get parram navigation: ', poid)
        this.props.DnAction.getItemDNToPO(poid)
    }

    componentWillUnmount(){
        this.props.DnAction.get_success();
    }

    render() {
        
        return (
            <View>
                <Text> Đợt nhận </Text>
                <PageDotNhan navigation = {this.props.navigation}/>
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
