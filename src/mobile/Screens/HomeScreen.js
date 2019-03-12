import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, Animated, Linking, Easing } from 'react-native';
import Communications from 'react-native-communications';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Info from './components/Info/Info';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  static navigationOptions = {
    title:'VC Mobile Signing Agent'
}

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                <Header/>
                <Services/>
                <Contact/>
                <Info/>
                <Form/>
                <Footer/>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height:'100%',
      top:-5,
      zIndex:9,
      backgroundColor:'rgb(245, 240, 240)'
    }
})