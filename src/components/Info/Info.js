import React, {Component} from 'react';
import payment from '../pics/payment.png';
import './info.css';
import professional from '../pics/professional.png';
import car from '../pics/car.jpg';
import pen from '../pics/writingPen.jpg';
import separator from '../pics/separator.png';

export default class Info extends Component{
    render(){
        return(
            <div className="info">
                <h3>Covered by Errors and Omissions Insurance policy for your protection.  We accept major credit and debit card, cash pay, cashier's check</h3>
                <img className="payment" src={payment} />
                <h3>Owned and operated by New York State licensed Notary, Vivienne Caldwell.</h3>
                <h3>Cost includes a charge for travel time, mileage, parking if needed, and gas.</h3>
                <img className="separator" src={separator} />
                <div className="professional-section">
                    <h2>Professional and Reliable</h2>
                    <img className="professional" src={professional} />
                    <h3>We will arrive at your location prepared and ready to perform any notary service you require. We'll be courteous and arrive on time.</h3>
                </div>
                <img className="separator" src={separator} />
                <div className="travel-section">
                    <h2>Travel to your location</h2>
                    <img className="car" src={car} />
                    <h3>We will meet you at your home, office, school, hospital, rehab, assisted living or anywhere that is convenient for you.</h3>
                </div>
                <img className="separator" src={separator} />
                <div className="certified-section">
                    <h2>Certified</h2>
                    <img className="pen" src={pen} />
                    <ul className="featured-list">
                    <h2>Specializes in:</h2>
                        <li><b>Refinance</b></li>
                        <li><b>Home purchase or sales</b></li>
                        <li><b>Home Equity Line of Credit</b></li>
                        <li><b>Trust</b></li>
                        <li><b>Prenuptial Agreements</b></li>
                        <li><b>Power of Attorney</b></li>
                        <li><b>Reverse Mortgage</b></li>
                        <li><b>Loan Modification</b></li>
                        <li><b>HELOC</b></li>
                        <li><b>Sworn statement/affidavit</b></li>
                        <li><b>Debt Resolution</b></li>
                        <li><b>Closing</b></li>
                        <li><b>Settlement</b></li>
                        <li><b>Pension Verification</b></li>
                        <li><b>Visitation of Minors</b></li>
                        <li><b>Impound Releases</b></li>
                        <li><b>Permission to travel for minor</b></li>
                        <li><b>Last Will and Testimony</b></li>
                        <li><b>Automotive Signing</b></li>
                        <li><b>I-9 Verification</b></li>
                        <li><b>Immigration Application</b></li>
                        <li><b>Advance Healthcare Directives</b></li>
                    </ul>
                    <h3>Responsibilities include communicating with Escrow companies, Lenders and Signing Services.</h3>
                </div>
                <h2>Contact for a Quote today! <br/>347-858-6393</h2>
            </div>
        )
    }
}