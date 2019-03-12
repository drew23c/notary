import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Communications from 'react-native-communications';
import email from '../../pics/email.png';

export default class Footer extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text className="title">VC Mobile Signing Agent</Text>
                <TouchableOpacity className="email-icon" onPress={()=> Communications.email("viviennecaldwell35@gmail.com", null, null, 'My Subject', 'My body text')}><Image style={{height:30, width:30}} source={email} /></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:9,
        bottom:0,
        width:'100%'  
    }
})