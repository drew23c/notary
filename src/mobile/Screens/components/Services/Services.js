import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default class Services extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.title}>Certified Mobile Notary Signing Agent travels to you.  Our service is strictly mobile by appointment only.</Text>
            <Text style={styles.title}>Servicing the Queens, Brooklyn, and Long Island area in NYC.</Text>
                <View style={{width:'80%', left:-15}}>
                    <FlatList
                        data={[
                            {key: '~Making sure legal documents are authentic.'},
                            {key: '~Checking the identity of the person signing the documents.'},
                            {key: '~Serving as a witness for the documents being signed.'},
                            {key: '~Travel to the borrower’s homes or offices to complete loan documents for Real Estate, Refinancing and modifications.'},
                            {key: '~Ensure that signer is aware and understand the documents he/she is signing.'},
                            {key: '~Ensure signer is of sound mind and is not signing under duress.'},
                            {key: '~Return all signed documents to Escrow company immediately to ensure that there is no lapse in time to record documents as needed in various entities involved.'},
                            {key: '~Fingerprinting background check for a new job or license.'},
                        ]}
                        renderItem={({item}) => <Text style={{marginBottom:3, fontSize:15}}>{item.key}</Text>}
                        />
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
        justifyContent: 'center',
        zIndex:9,
        color:'green',
    },
    title:{
        fontWeight:'bold',
        fontSize:15,
        width:350,
        left:-15
    }
})