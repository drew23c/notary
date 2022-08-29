import React, {Component} from 'react';
import './services.css';
import qrcode from '../pics/qrCode.png';

export default class Services extends Component{
    render(){
        return(
            <div className="services">
            <img className="qrcode" src={qrcode} />
            <h2>Certified Mobile Notary Signing Agent travels to you.  Our service is strictly mobile by appointment only.</h2>
            <h2>Servicing the Queens, Brooklyn, Nassau and Suffolk Counties.</h2>
                <ul>
                    <li>~Making sure legal documents are authentic.</li>
                    <li>~Checking the identity of the person signing the documents.</li>
                    <li>~Serving as a witness for the documents being signed.</li>
                    <li>~Travel to the borrower’s homes or offices to complete loan documents for Real Estate, Refinancing and modifications.</li>
                    <li>~Ensure that signers is aware and understand the documents he/she is signing.</li>
                    <li>~Ensure signers is of sound mind and is not signing under duress.</li>
                    <li>~Return all signed documents to Escrow company immediately to ensure that there is no lapse in time to record documents as needed in various entities involved.</li>
                    <li>~Fingerprinting background check for a new job or license.</li>
                </ul>
            </div>
        )
    }
}