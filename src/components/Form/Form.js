import React, {Component} from 'react';
import './form.css';

export default class Form extends Component{
    render(){
        return(
            <div className="form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdnfeKQk0k5cBa4j3eI_wSbI_3F4pC22q5ykhabFevCJ_h5Ww/viewform?embedded=true" width="640" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                <a href='https://play.google.com/store/apps/details?id=com.vcmobilesigningagent&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className="badge" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
            </div>
        )
    }
}