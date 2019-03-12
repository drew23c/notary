import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import phone from '../../pics/phone.png';
import Communications from 'react-native-communications';

export default class Contact extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Click to Call</Text>
                <TouchableWithoutFeedback onPress={()=> Communications.phonecall('3478586383', true)}><Image style={{height:100, width:100}} className="phone" source={phone} /></TouchableWithoutFeedback>
                <Text>Call me at 347-858-6383</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',  
    }
})