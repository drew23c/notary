import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
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
                <View style={{width:'80%', left:-15}}>
                    <Text>Covered by Errors and Omissions Insurance policy for your protection.  We accept major credit and debit card, cash pay, cashier's check</Text>
                    <Image style={{height:100, width:175, marginLeft:70}} source={payment} />
                    <Text>Owned and operated by New York State licensed Notary, Vivienne Caldwell.</Text>
                    <Text>Cost includes a charge for travel time, mileage, parking if needed, and gas.</Text>
                    <Image style={{height:50, width:50, marginLeft:140}} source={separator} />
                    <View style={styles.container}>
                        <Text style={styles.title}>Professional and Reliable</Text>
                        <Image style={{height:100, width:100, borderRadius:25}} source={professional} />
                        <Text>We will arrive at your location prepared and ready to perform any notary service you require. We'll be courteous and arrive on time.</Text>
                    </View>
                    <Image style={{height:50, width:50, marginLeft:140}} source={separator} />
                    <View style={styles.container}>
                        <Text style={styles.title}>Travel to your location</Text>
                        <Image style={{height:100, width:150, borderRadius:25}} source={car} />
                        <Text>We will come to the location that works best for you.</Text>
                    </View>
                    <Image style={{height:50, width:50, marginLeft:140}} source={separator} />
                    <View style={styles.container}>
                        <Text style={styles.title}>Certified</Text>
                        <Image style={{height:100, width:100, borderRadius:25}} source={pen} />
                            <Text style={{fontWeight:'bold', marginTop:5}}>Specializes In:</Text>
                            <FlatList
                                data={[
                                    {key: 'Refinance'},
                                    {key: 'Home purchase or sales'},
                                    {key: 'Home Equity Line of Credit'},
                                    {key: 'Trust'},
                                    {key: 'Prenuptial Agreements'},
                                    {key: 'Power of Attorney'},
                                    {key: 'Reverse Mortgage'},
                                    {key: 'Loan Modification'},
                                    {key: 'HELOC'},
                                    {key: 'Sworn statement/affidavit'},
                                    {key: 'Debt Resolution'},
                                    {key: 'Closing'},
                                    {key: 'Settlement'},
                                    {key: 'Pension Verification'},
                                    {key: 'Visitation of Minors'},
                                    {key: 'Impound Releases'},
                                    {key: 'Permission to travel for minor'},
                                    {key: 'Last Will and Testimony'},
                                    {key: 'Automotive Signing'},
                                    {key: 'I-9 Verification'},
                                    {key: 'Immigration Application'},
                                    {key: 'Advance Healthcare Directives'},
                                ]}
                                renderItem={({item}) => <Text style={{marginBottom:5, fontWeight:'bold'}}>{item.key}</Text>}
                            />     
                        <Text style={{fontSize:15}}>Responsibilities include communicating with Escrow companies, Lenders and Signing Services.</Text>
                    </View>
                    <Text style={{fontSize:15, marginLeft:70}}>Contact for a Quote today!</Text>
                    <TouchableOpacity onPress={()=> Communications.phonecall('3478586393',true)}><Text style={{fontSize:15, marginLeft:110}}>347-858-6393</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffe5',
        alignItems: 'center',
        justifyContent: 'center' ,
        zIndex:9,
        width:'100%'
    },
    title:{
        fontWeight:'bold',
        fontSize:20
    }
})