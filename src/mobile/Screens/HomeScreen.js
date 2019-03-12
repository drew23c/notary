import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, Animated, Linking, Easing } from 'react-native';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Info from './components/Info/Info';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import {Font} from 'expo';

export default class App extends Component {
  static navigationOptions = {
    title:'VC Mobile Signing Agent'
}
state = {
    fontLoaded: false,
  };
async componentDidMount() {
    await Font.loadAsync({
      'oleoScript': require('../assets/fonts/OleoScript-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
}
    render(){
        return(
            <ScrollView>
                {
                    this.state.fontLoaded ? (
                        <View style={styles.container}>
                        <Header/>
                        <Services/>
                        <Contact/>
                        <Info/>
                        <Form/>
                        <Footer/>
                        </View>
                    )
                    :
                    null
                }
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontFamily:'oleoScript',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height:'100%',
      top:-5,
      zIndex:9,
      color:'rgb(10, 94, 10)',
      backgroundColor:'#ffffe5'
    }
})