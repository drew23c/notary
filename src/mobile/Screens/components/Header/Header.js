import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import writerHeader from '../../pics/writer-header.jpg';

export default class Header extends Component{
    render(){
        return(
            <View>
                <Image className="writer-header" source={writerHeader} />
            </View>
        )
    }
}