import React, {Component} from 'react';
import payment from '../pics/payment.png';
import './info.css';

export default class Info extends Component{
    render(){
        return(
            <div className="info">
                <h2>Covered by Errors and Omissions Insurance  policy for your protection.  We accept major credit and debit card, cash pay, cashier's check</h2>
                <img className="payment" src={payment} />
            </div>
        )
    }
}