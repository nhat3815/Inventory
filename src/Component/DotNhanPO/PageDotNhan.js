import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ListDotNhan from './ListDotNhan'

export class PageDotNhan extends Component {


    render() {
        return (
            <View>
                <ListDotNhan/>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PageDotNhan)
