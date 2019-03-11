import React, {Component} from 'react';
import {View, Text, WebView} from 'react-native';
import Iframe from 'react-iframe';

export default class Form extends Component{
    render(){
        return(
            <View>
                <WebView 
                    source={{uri:'https://docs.google.com/forms/d/e/1FAIpQLSdnfeKQk0k5cBa4j3eI_wSbI_3F4pC22q5ykhabFevCJ_h5Ww/viewform?embedded=true'}}
                    style={{height:1200, width:400, alignItems:'center'}}
                />
            </View>
        )
    }
}
<iframe url="https://docs.google.com/forms/d/e/1FAIpQLSdnfeKQk0k5cBa4j3eI_wSbI_3F4pC22q5ykhabFevCJ_h5Ww/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">...Loading</iframe>