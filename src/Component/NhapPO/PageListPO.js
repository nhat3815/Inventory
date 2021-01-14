import React, { Component } from 'react'
import { View, Text,FlatList } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import ItemPro from './ItemPro.js'


export class PageListPO extends Component {    
  constructor(props){
    super(props);
 }
    getMenuItem() {
        const {ItemPO} = this.props;  
        return ItemPO;
      }
    
    
  onShow() {
    const {POID, id, Name, dvt, So_luong_nhan} = this.state
    this.props.dispatch({
      type: 'SHOW_ALL_PO',
      POID,
      id,
      Name,
      dvt,
      So_luong_nhan
    })
  }

    render() {
        console.log('dataItem PO: ', this.props.ItemPO)
        return (
            <View>
                  <FlatList 
                  data = {this.props.ItemPO}
                  renderItem = {({item}) => <ItemPro ItemPO = {item} create = {false} dispatch = {this.props.dispatch}/>}
                  keyExtractor={(item) => item.id}
              />
              
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ItemPO: state.reducerNhapPO.item,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PageListPO)
