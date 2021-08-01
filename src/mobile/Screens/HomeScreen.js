import React, {Component} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
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
            <View style={styles.container}>
                <ScrollView>
                <Header/>
                <Services/>
                <Contact/>
                <Info/>
                <Form/>
                <Footer/>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height:'100%',
      top:-5,
      zIndex:9,
      color:'rgb(10, 94, 10)',
    }
})