import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import * as DnAction from "./StateDotNhan.js";
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'

import ItemDotNhan from "./ItemDotNhan.js"



export class ListDotNhan extends Component {
    constructor(props){
        super(props);
     }

     getDotNhan(){
         const{ItemDotNhan} = this.props;
         return ItemDotNhan;
     }

    //  onShow(){
    //      const{POID,DotNhan,NgayNhan,HinhThuc,TrangThai} = this.state
    //         this.props.DnAction.get_success(
    //             POID,
    //             DotNhan,
    //             NgayNhan,
    //             HinhThuc,
    //             TrangThai)
                
    //  }

    render() {
           console.log('Item Đợt nhận: ', this.props.ItemDotNhan)
        return (
            <View>
                <Text> Danh sách đợt nhận </Text>
                <FlatList 
                    data= {this.props.ItemDotNhan}
                    renderItem = {({item}) => <ItemDotNhan ItemDotNhan = {item}/>}
                    keyExtractor={(item)=>item.DotNhan}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
     ItemDotNhan: state.reducerDotNhan.item,
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        DnAction:bindActionCreators(DnAction, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ListDotNhan)
