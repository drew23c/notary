import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import writerHeader from '../../pics/writer-header.jpg';

export default class Header extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={{height:300, width:400, zIndex:9}} className="writer-header" source={writerHeader} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'  
    }
})