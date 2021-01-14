import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as PoAction from '../NhapPO/StateDataPO';
import {bindActionCreators} from 'redux'

export class ItemPro extends Component {
    
    constructor(props){
        super(props);
    }

    upPro = (proid) => {
        this.props.PoAction.UpNhan_success(proid)
        console.log('Số lượng nhận sau dispath: ' + this.props.ItemPO.So_luong_nhan)
    }

    downPro(proid){
        this.props.PoAction.DownNhan_success(proid)
    }

    render() {
        const {ItemPO} = this.props;
        console.log('Call list PO:', ItemPO )
        return (
            <View style = {styles.container}>
                {/* <Image/> */}

               <View style = {styles.ThongTin}>
                    <View style = {styles.Names}>
                    <Text style = {styles.textTieuDe}>Tên sản phẩm</Text>
                    <Text style = {styles.textinput}>{ItemPO.Name}</Text>
                    </View>

                    <View style = {styles.dvt}>
                    <Text style = {styles.textTieuDe}> Đơn vị tính</Text>
                    <Text style = {styles.textinput}>{ItemPO.dvt}</Text>
                    </View>
               </View>

                <View style = {styles.slnhan}>                    
                    <TouchableOpacity style={styles.ButtonClick} onPress={() =>{this.upPro(ItemPO.id)}}>
                        <Text>+</Text>
                    </TouchableOpacity>
                    <TextInput 
                        value={ItemPO.So_luong_nhan.toString()}                  
                       keyboardType = 'numeric'
                        onChangeText={(text) => this.setState({So_luong_nhan: text})}
                    />

                    <TouchableOpacity style={styles.ButtonClick} onPress={()=>{this.downPro(ItemPO.id)}}>
                        <Text>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor: '#e6e6e6',
        borderBottomColor:'#000000',
        margin: 5,
    },
    ThongTin:{
        flex:7,
    },
    Names:{
        fontSize:15,
        margin: 10,
        flexDirection:'row',
        margin: 5,
    },
    dvt:{
        fontSize:15,
        margin: 10,
        flexDirection:'row',
        margin: 5,
    },
    textinput:{
        fontSize: 15,
        marginLeft: 10,
        fontFamily: 'Arial, Helvetica, sans-serif',
    },
    textTieuDe:{
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'Arial, Helvetica, sans-serif',
    },
    slnhan:{
        flex:3,
        flexDirection:'row', 
        fontSize: 15,
        margin: 15,
     },
    ButtonClick:{
        margin: 10,
        height: 30,
        width: 30,
        backgroundColor:'#cccccc',
        alignItems: 'center',
        justifyContent: 'center',
    }
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

export default connect(null , mapDispatchToProps)(ItemPro)
