import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity} from 'react-native';
import phone from '../../pics/phone.png';
import Communications from 'react-native-communications';

export default class Contact extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Click to Call</Text>
                <TouchableOpacity onPress={()=> Communications.phonecall('3478586383', true)}><Image style={{height:100, width:100}} source={phone} /></TouchableOpacity>
                <Text style={styles.title}>Call me at 347-858-6383</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffe5',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:9,
        marginLeft:-40
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
    }
})