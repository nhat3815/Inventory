import React, { Component } from 'react';
import { View , Text, TextInput, TouchableOpacity,Image,StyleSheet, Button} from 'react-native';
import { connect } from 'react-redux';

export class SearchPO extends Component {
    constructor(props){
        super(props);
        this.state = {
           id:''
        };
    }

    ButtonClick(poid){
        console.log('Navigation: ' + 'DotNhanPONav');
        console.log('ID...: ', poid)
        this.props.navigation.navigate('DotNhanPONav',{poid: poid});
      }

    render() {
        return (
            <View>
                {console.log('Build search PO')}
                <Text>Search PO</Text>
                <View style={styles.viewTextSearch}>
                <Text style = {styles.TextInputs}>Mã đơn đặt hàng</Text>
                <TextInput style = {styles.TextInputs}
                    placeholder="Nhập mã PO"
                    // onChangeText={}
                    value={this.state.id}
                    onChangeText={(text) => this.setState({id: text})}
                />
                <TouchableOpacity style={styles.scan}
                    onPress = {CallScanQR.bind(this)}
                >
                    <Image 
                        style = {styles.imageBarcode}
                        source={require('../../../Image/icon/' + 'barcode.png')}
                    />
                </TouchableOpacity>
                </View>
                <Text style = {styles.note}>Lưu ý: Nhập mã đơn hàng hoặc quét barcode trên đơn hàng</Text>

                <TouchableOpacity style={styles.Button} 
                 onPress = {()=>this.ButtonClick(this.state.id)}
                 >
                    <Text>Tìm kiếm</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function CallScanQR() {
    this.props.navigation.navigate('ScanQRNav');    
}

const mapStateToProps = (state, ownProps) => {
    return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
}

const styles = StyleSheet.create({
    contrain:{
        margin: 5,
        fontSize:15,

    },
    TextInputs:{
        flex: 4,
    },

    viewTextSearch:{

        height: 50,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'stretch',
        margin: 15,
    },
    imageBarcode:{
        height: 30,
        width:30,
        alignItems: 'flex-end',
        margin: 5,
    },

    note:{
        margin: 10,
        fontWeight: '100',
    },

    scan:{
        flex:1,
    },
    Button:{
        margin:10,
        height:50,
        fontSize:20,
        color: '#fafafa',
        backgroundColor:'#00ff00',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 30,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPO)
