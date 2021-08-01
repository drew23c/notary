import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import writerHeader from '../../pics/writerHeader.jpg';
import profile from '../../pics/profile.jpg';

export default class Header extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={{height:300, width:400, zIndex:9}} className="writer-header" source={writerHeader} />
                <Image style={{width:80, height:80, top:5, borderRadius:25, left:-15}} source={profile} />
                <Text style={{top:5, left:-15, padding:5, fontWeight:'bold', fontSize:15}}>Vivienne Caldwell, Mobile Signing Agent/ Livescan Fingerprinting</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        zIndex:9  ,
        backgroundColor:'#ffffe5'
    }
})