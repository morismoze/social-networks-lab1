import React from 'react';

import {
    FacebookShareButton,
    TwitterShareButton,
    ViberShareButton,
    WhatsappShareButton
} from "react-share";

import ShareIcon from "./ShareIcon";
import Facebook from "../../../assets/images/facebook.png";
import Twitter from "../../../assets/images/twitter.png";
import WhatsApp from "../../../assets/images/whatsapp.png";
import Viber from "../../../assets/images/viber.png";
import styles from './Share.module.scss';

const Share = () => {
    return (
        <div className={styles.shareContainer}>
            <FacebookShareButton
                url={window.location.href}
                className={styles.shareContainer__btn}
            >
                <ShareIcon
                    src={Facebook}
                    alt='Facebook'
                    size={32}
                />
            </FacebookShareButton>
            <TwitterShareButton
                url={window.location.href}
                className={styles.shareContainer__btn}
            >
                <ShareIcon
                    src={Twitter}
                    alt='Twitter'
                    size={32}
                />
            </TwitterShareButton>
            <WhatsappShareButton
                url={window.location.href}
                className={styles.shareContainer__btn}
            >
                <ShareIcon
                    src={WhatsApp}
                    alt='WhatsApp'
                    size={32}
                />
            </WhatsappShareButton>
            <ViberShareButton
                url={window.location.href}
                className={styles.shareContainer__btn}
            >
                <ShareIcon
                    src={Viber}
                    alt='Viber'
                    size={32}
                />
            </ViberShareButton>
        </div>
    );
};

export default Share;