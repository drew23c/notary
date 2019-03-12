import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import Communications from 'react-native-communications';
import professional from '../../pics/professional.png';
import car from '../../pics/car.jpg';
import pen from '../../pics/writingPen.jpg';
import separator from '../../pics/separator.png';
import payment from '../../pics/payment.png';

export default class Info extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Covered by Errors and Omissions Insurance  policy for your protection.  We accept major credit and debit card, cash pay, cashier's check</Text>
                <Image style={{height:100, width:175}} className="payment" source={payment} />
                <Text>Owned and operated by New York State licensed Notary, Vivienne Caldwell</Text>
                <Text>Cost includes charge for travel time, mileage, parking if needed, and gas</Text>
                <Image style={{height:50, width:50}} className="separator" source={separator} />
                <View style={styles.container} className="professional-section">
                    <Text>Professional and Reliable</Text>
                    <Image style={{height:100, width:100}} className="professional" source={professional} />
                    <Text>We will arrive at your location prepared and ready to perform any notary service you require. We'll be courteous and arrive on time</Text>
                </View>
                <Image style={{height:50, width:50}} className="separator" source={separator} />
                <View style={styles.container} className="travel-section">
                    <Text>Travel to your location</Text>
                    <Image style={{height:100, width:100}} className="car" source={car} />
                    <Text>We will come to the location that works best for you</Text>
                </View>
                <Image style={{height:50, width:50}} className="separator" source={separator} />
                <View style={styles.container} className="certified-section">
                    <Text>Certified</Text>
                    <Image style={{height:100, width:100}} className="pen" source={pen} />
                    <Text>Specialized in loan documents for Refinance, Home purchase or sales, Home Equity Line of Credit and Reverse Mortgage</Text>  
                    <Text>Responsibilities include communicating with Escrow companies, Lenders and Signing Services</Text>
                </View>
                <Text>Contact for a Quote today!</Text>
                <TouchableWithoutFeedback onPress={()=> Communications.phonecall('3478586383',true)}><Text>347-858-6383</Text></TouchableWithoutFeedback>
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