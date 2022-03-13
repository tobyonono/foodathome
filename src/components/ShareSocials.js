import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton} from 'react-share';
import * as Icon from '../icons/svg/svgs.js';

const ShareSocials = () => {

    const shareUrl = window.location.href;

    return (
        <div className="socialWrapper">
            <ul className='socialIcons'>
                <li>
                    <FacebookShareButton url={shareUrl} className="socialButton">
                        <Icon.Facebook />
                        <span>Share</span>
                    </FacebookShareButton>
                </li>
                <li>
                    <TwitterShareButton url={shareUrl} via={'bittercassava'} className="socialButton">
                        <Icon.Twitter />
                        <span>Tweet</span>
                    </TwitterShareButton>
                </li>
                <li>
                    <WhatsappShareButton url={shareUrl} className="socialButton">
                        <Icon.WhatsApp />
                        <span>Text</span>
                    </WhatsappShareButton>
                </li>
            </ul>
        </div>

    )
}

export default ShareSocials;