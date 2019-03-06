import React, {Component} from 'react';
import './services.css';

export default class Services extends Component{
    render(){
        return(
            <div className="services">
            <h2>Certified Mobile Notary Signing Agent travels to you.  Our service is strictly mobile by appointment only</h2>
                <ul>
                    <li>Making sure legal documents are authentic</li>
                    <li>Checking the identity of the person signing the documents</li>
                    <li>Serving as a witness for the documents being signed</li>
                    <li>Travel to borrower’s homes or offices to complete loan documents for Real Estate, Refinancing and modifications</li>
                    <li>Ensure that signer is aware and understand the documents he/she is signing</li>
                    <li>Ensure signer is of sound mind and is not signing under duress</li>
                    <li>Return all signed documents to Escrow company immediately to ensure that there is no lapse in time to record documents as needed in various entities involved</li>
                    <li>Fingerprinting background check for a new job or license</li>
                </ul>
            </div>
        )
    }
}