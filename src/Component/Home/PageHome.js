import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import ItemHome from './ItemHome';
import { log } from 'react-native-reanimated';
export class PageHome extends Component {

  constructor(props){
    super(props);
 }

  getMenuItem() {
    const {myItem} = this.props;  
    return myItem;
  }

  onShow() {
    const {navigation, Name, classIcon, Icon, isShow} = this.state
    this.props.dispatch({
      type: 'SHOW_ALL',
      Name,
      navigation,
      classIcon,
      Icon,
      isShow
    })
  }

  

  render() {
    console.log('dataItem',this.props.myItem)
    return (
      <View style={{flex: 1,
        justifyContent: 'center'}}>
        {/* <FlatList
          data={this.getMenuItem()}
          renderItem={({item}) => <ItemHome myItem={item} />}
          keyExtractor={(item) => item.id}
        /> */}

        <FlatList 
        numColumns={3}
        style = {styles.FlatList}
          data = {this.props.myItem}
          renderItem = {({item}) => 
          <View style={styles.ListMenu}>
            <ItemHome myItem = {item} create = {false}
                navigation = {this.props.navigation}
            />
          </View>
          }
          keyExtractor={(item) => item.id}
        />
        
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//     console.log(state.ItemMenu + ' Item Menu');
//     return {
//     myItem: state.ItemMenu,
//   };
// };

function mapStateToProps(state) {
  return {
    myItem: state.ReducerHome.item,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'yellow',
    justifyContent: 'space-around',
    flexDirection:'row'
  },
  FlatList:{
    flex:1,
    flexDirection:'row'
  },
  ListMenu:{
    justifyContent: 'space-around',
    flexDirection:'row'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHome);
