import React, {Component} from 'react';
import payment from '../pics/payment.png';
import './info.css';
import professional from '../pics/professional.png';
import car from '../pics/car.jpg';
import pen from '../pics/writingPen.jpg';
import separator from '../pics/separator.png';
import livescan from '../pics/Fingerprint.jpg';
import cert from '../pics/Trained Signing Agent.png';
import camera from '../pics/shutterstock.jpg';

export default class Info extends Component{
    render(){
        return(
            <div className="info">
                <h3>Covered by Errors and Omissions Insurance policy for your protection.  I accept cash and cashier's check</h3>
                <img className="payment" src={payment} />
                <h3>Owned and operated by New York State licensed Notary, Vivienne Caldwell.</h3>
                <h3>Cost includes a charge for travel time, mileage, parking if needed, and gas.</h3>
                <img className="separator" src={separator} />
                <div className="professional-section">
                    <h2>Professional and Reliable</h2>
                    <img className="professional" src={professional} />
                    <h3>I will arrive at your location prepared and ready to perform any notary and fingerprinting service you require. I'll be courteous and arrive on time.</h3>
                </div>
                <img className="separator" src={separator} />
                <div className="travel-section">
                    <h2>Travel to your location</h2>
                    <img className="car" src={car} />
                    <h3>I will meet you at your home, office, school, hospital, rehab, assisted living or anywhere that is convenient for you.</h3>
                </div>
                <img className="separator" src={separator} />
                <div className="certified-section">
                    <h2>Certified</h2>
                    <img className="pen" src={pen} />
                    <h2>Specializes in:</h2>
                    <div className="row">
                    <div className="column">
                        <li><b>Loan documents for Refinance</b></li>
                        <li><b>Home purchase or sales</b></li>
                        <li><b>Home Equity Line of Credit</b></li>
                        <li><b>Reverse Mortgage</b></li>
                        <li><b>Loan modifications</b></li>
                        <li><b>Debt Consolidation</b></li>
                        <li><b>Power of Attorney</b></li>
                        <li><b>Last Will and Testament</b></li>
                        <li><b>Life of Certification</b></li>
                        <li><b>Permission for Children/Child to travel without one parent</b></li>
                        <li><b>Adoption</b></li>
                    </div>
                    <div className="column">
                        <li><b>Tow yard consent</b></li>
                        <li><b>Impounds</b></li>
                        <li><b>Affidavit</b></li>
                        <li><b>Closing</b></li>
                        <li><b>Deposition</b></li>
                        <li><b>Transfer of property</b></li>
                        <li><b>Insurance</b></li>
                        <li><b>Retirement</b></li>
                        <li><b>Bail Bonds</b></li>
                        <li><b>Background Check</b></li>
                    </div>
                    </div>
                    <h3>Responsibilities include communicating with Escrow companies, Lenders and Signing Services.</h3>
                    <h3>Also serving as a Remote Testimony Witness:</h3>
                    <h3>Telephone Deposition where the court or circumstances set  up a conference call, where a Notary will be present to identify the individual providing the testimony.</h3>
                    <img className="payment" src={livescan} />
                    <h3>
                        I can offer ALL of your print scan and notary signing services wherever you are located. I can
                        provide services in Libraries, Post Offices, Airports, or any other venue of your request.
                        The benefits my Mobile Fingerprinting and Notary Signing services include convenience of not
                        having to leave your home or offices.
                    </h3>
                    <h2>Mobile Fingerprinting Specializes In:</h2>
                    <div className="row">
                        <div className="column">
                            <li><b>Contractors</b></li>
                            <li><b>Heathcare Worker Registry</b></li>
                            <li><b>Nursing Physician, Medical Industry</b></li>
                            <li><b>Medical Marijuana</b></li>
                            <li><b>Adoption</b></li>
                            <li><b>Security Companies</b></li>
                            <li><b>Financial Service Companies</b></li>
                        </div>
                        <div className="column">
                            <li><b>Auto Dealers</b></li>
                            <li><b>Tow Truck Drivers</b></li>
                            <li><b>School District/Education</b></li>
                            <li><b>Employment Agencies</b></li>
                            <li><b>Liquor Authority</b></li>
                            <li><b>Legal Professionals</b></li>
                        </div>
                    </div>
                    <h2>Additional Services:</h2>
                    <div className="row">
                        <div className="column">
                        <li><b>Passport Pictures</b></li>
                        <li><b>Background Checks</b></li>
                        </div>
                    </div>
                    <img className="payment" src={cert} />
                </div>
                <h2>Contact for a Quote today! <br/>347-858-6393</h2>
                <div className="photography">
                    <img className="camera" src={camera} />
                    <p>Do you need a Professional Photographer?</p>
                        <p>Event Photographer:</p>
                            <li>Sweet Sixteen</li>
                            <li>Quinceanera</li>
                            <li>Birthday Party</li>
                            <li>Graduations</li>
                            <li>Bridal Shower</li>
                            <li>Baby Shower</li>
                            <li>Maternity</li>
                            <li>Engagement Party</li>
                            <li>Fashion Shoot</li>
                            <li>Family Portrait</li>
                            <li>Proposal</li>
                            <li>Baby</li>
                            <li>Confirmation</li>
                            <li>Christening</li>
                        <p>Check out Impulsive Visions by Traffik.</p>
                        <p>impulsivevisions.pixie <a href="https://set.com" target="_blank">set.com</a></p>
                        <p><a href="https://Instagram.com/Impulsive_visions" target="_blank">Instagram.com/Impulsive_visions</a></p>
                        <p><a href="https://Twitter.com/IV_By_Traffik" target="_blank">Twitter.com/IV_By_Traffik</a></p>
                        <p>For more information, email :</p>
                        <p><a href="mailto:IVBYTRAFFIK@gmail.com">IVBYTRAFFIK@gmail.com</a></p>
                </div>
            </div>
        )
    }
}