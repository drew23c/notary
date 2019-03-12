import React, {Component} from 'react';
import {View, WebView, StyleSheet} from 'react-native';

export default class Form extends Component{
    render(){
        return(
            <View style={styles.container}>
                <WebView 
                    source={{uri:'https://docs.google.com/forms/d/e/1FAIpQLSdnfeKQk0k5cBa4j3eI_wSbI_3F4pC22q5ykhabFevCJ_h5Ww/viewform?embedded=true'}}
                    style={{height:1000, width:400, alignItems:'center', margin:0}}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'  
    }
})